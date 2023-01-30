const users = [
  {
    id: 1,
    user: "admin",
    password: 123456789,
    emal: "admin@gmail.com",
    roles: ["admin"],
    permissions: ["admin"],
  },
  {
    id: 2,
    user: "luisvasquez",
    password: 123456789,
    emal: "luisvasquez@gmail.com",
    roles: ["vendedor"],
    permissions: ["sales", "products", "brands", "lines"],
  },
  {
    id: 3,
    user: "juanperez",
    password: 123456789,
    emal: "juanperez@gmail.com",
    roles: ["bodeguero"],
    permissions: ["entries", "brands", "lines", "stock", "products"],
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
