const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];


const isLoginValid = function(login) {
  return login.length >= 4 && login.length <= 16 ? true : false;
};

const isLoginUnique = function(logins, login) {
  return logins.includes(login) ? false : true;
};


const addLogin = function(logins, login) {
  let message;
  if (isLoginValid(login) === false) {
    message = "Ошибка! Логин должен быть от 4 до 16 символов";
  } else if (isLoginUnique(logins, login) === false) {

    message = "Такой логин уже используется!";
  } else {
    logins.push(login);
    console.log(logins);
    message = "Логин успешно добавлен!";
  }
  console.log(message);
};

addLogin(logins, "Ajax"); // 'Логин успешно добавлен!'
addLogin(logins, "robotGoogles"); // 'Такой логин уже используется!'
addLogin(logins, "Zod"); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, "jqueryisextremelyfast");
