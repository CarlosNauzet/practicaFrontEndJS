export const signUpController = (signUpForm) => {
  signUpForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(signUpForm);
    const userName = formData.get("username");
    const password = formData.get("password");
  });
};
