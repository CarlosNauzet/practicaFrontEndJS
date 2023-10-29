import { dispatchCustomEvent } from "../utils/customEvent.js";
import { logInUser } from "./logInModel.js";

export const logInController = (logInForm) => {
  logInForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(logInForm);
    const userName = formData.get("username");
    const password = formData.get("password");

    try {
      // 4. lanzo evento para mostrar el loader
      dispatchCustomEvent("loginStarted", logInForm);
      const token = await logInUser(userName, password);
      alert("User succesfully logged in");
      console.log(token);
      localStorage.setItem("accessToken", token.accessToken);
      window.location.href = "/";
    } catch (error) {
      alert(error);
      // 5. lanzo evento para ocultar el loader
    } finally {
      dispatchCustomEvent("loginEnded", logInForm);
    }
  });
};
