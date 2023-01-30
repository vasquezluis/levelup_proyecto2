const users = [
  {
    id: 1,
    user: "admin",
    password: 123456789,
    emal: "admin@gmail.com",
    roles: ["admin"],
    permissions: ["admin", "sales", "reports"],
  },
  {
    id: 2,
    user: "luisvasquez",
    password: 123456789,
    emal: "luisvasquez@gmail.com",
    roles: ["vendedor"],
    permissions: ["sales", "reports"],
  },
];

export const getUserService = (user, password) => {
  const userFound = users.find((item) => item.user === user);

  if (userFound) {
    const passFound = userFound.password == password;

    var result = null;

    if (passFound) {
      return userFound;
    } else {
      result = { error: "pass" };
      return result;
    }
  } else {
    result = { error: "user" };
    return result;
  }
};
