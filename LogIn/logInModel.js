export const logInUser = async (username, password) => {
  const body = {
    username,
    password,
  };

  const url = "http://localhost:8000/auth/login";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
};
