module.exports.validateRegisterInput = (
  username,
  email,
  password,
  confirmPassword,
  type
) => {
  const errors = {};
  if (username.trim() === "") {
    errors.username = "Username must not be empty";
  }
  if (email.trim() === "") {
    errors.email = "email must not be empty";
  } else {
    const regEx =
      /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
    if (!email.match(regEx)) {
      errors.email = "Email must be a valid address";
    }
  }
  if (password.trim() === "") {
    errors.password = "password must not be  empty";
  } else if (password !== confirmPassword) {
    errors.confirmPassword = "password not  be match";
  }
  if (username.trim() === "admin") {
    if (type.trim() === "") {
      errors.type = "type must not be empty";
    }
  }
  return {
    errors,
    valid: Object.keys(errors).length < 1, // if valid is true there means there is no error, or if error length < 1  means there is no error
  };
};

// validate the login

module.exports.validateLoginInput = (username, password, type) => {
  const errors = {};
  if (username.trim() === "") {
    errors.username = "Username must not be empty";
  }
  if (password.trim() === "") {
    errors.password = "Password must not be empty";
  }
  if (username.trim() === "admin") {
    if (type.trim() === "") {
      errors.type = "type must not be empty";
       
    }
  }
  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};
