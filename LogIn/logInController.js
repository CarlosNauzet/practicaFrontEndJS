import { logInUser } from "./logInModel.js";

export const logInController = (logInForm) => {
  logInForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(logInForm);
    const userName = formData.get("username");
    const password = formData.get("password");

    try {
      const token = await logInUser(userName, password);
      alert("User succesfully logged in");
      console.log(token);
      localStorage.setItem("accessToken", token.accessToken);
      window.location.href = "/";
    } catch (error) {
      alert(error);
    }
  });
};
