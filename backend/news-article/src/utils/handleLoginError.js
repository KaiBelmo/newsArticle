export const handleLoginError = (err, userError) => {
  if (err.response || err.response.data) {
    if (err.response.data.message.search("email") !== -1) {
      userError.emailError = err.response.data.message;
    } else if (err.response.data.message.search("password") !== -1) {
      userError.passwordError = err.response.data.message;
    } else {
      userError.unknownError = err.response.data.message;
    }
  }
  return userError;
}

export const resetUserError = (userError) => {
  userError.emailError = "";
  userError.passwordError = "";
  userError.unknownError = "";
}