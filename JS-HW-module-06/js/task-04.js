import users from "./users.js"

// Получить массив только неактивных пользователей (поле isActive).

const getInactiveUsers = users => {
  return users.filter(obj => obj.isActive === false)
};

console.log(getInactiveUsers(users));