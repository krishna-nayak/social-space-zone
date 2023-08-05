export function validateEmail(email) {
  // email validation regex
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

export function validatePassword(password) {
  // must contain special character, number, uppercase and lowercase 8 character
  const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  return re.test(password);
}

export function isAuthenticated() {
  return localStorage.getItem("user_token");
}
