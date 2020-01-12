import users from "./users.js"

const getUsersWithGender = (users, gender) => {
    return users.filter(obj => obj.gender === gender).map(el => el.name)
    
  };
  
  console.log(getUsersWithGender(users, 'male'));