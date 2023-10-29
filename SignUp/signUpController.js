import { dispatchCustomEvent } from "../utils/customEvent.js";
import { signUpUser } from "./signUpModel.js";

export const signUpController = (signUpForm) => {
  signUpForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(signUpForm);
    const userName = formData.get("username");
    const password = formData.get("password");

    try {
      dispatchCustomEvent("signupStarted", signUpForm);
      const userData = await signUpUser(userName, password);
      window.location.href = "./login.html";
      alert("User registered successfully");
    } catch (error) {
      alert(error);
    } finally {
      dispatchCustomEvent("signupEnded", signUpForm);
    }
  });
};
