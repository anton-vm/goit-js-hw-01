import users from "./users.js"

// console.log(users);

// const getUsersWithEyeColor = users.filter(obj => obj.eyeColor === 'blue');
  
//   console.log(getUsersWithEyeColor);



  const getUsersWithEyeColor = (users, color) => {
    return users.filter(obj => obj.eyeColor === color)
  };
  
  console.log(getUsersWithEyeColor(users, 'blue'));