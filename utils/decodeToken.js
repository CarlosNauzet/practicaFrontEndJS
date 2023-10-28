export const decodeToken = (token) => {
  let decodedToken;
  try {
    const stringToken = atob(token.split(".")[1]);
    decodedToken = JSON.parse(stringToken);
  } catch (error) {
    return null;
  }

  return decodedToken;
};
