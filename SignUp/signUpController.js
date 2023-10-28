import { signUpUser } from "./signUpModel.js";

export const signUpController = (signUpForm) => {
  signUpForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(signUpForm);
    const userName = formData.get("username");
    const password = formData.get("password");

    try {
      const userData = await signUpUser(userName, password);
      alert("User registered successfully");
      window.location.href = "./login.html";
    } catch (error) {
      alert(error);
    }
  });
};
