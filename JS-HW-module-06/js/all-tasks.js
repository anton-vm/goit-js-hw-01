import users from "./users.js"

// task-01

const getUserNames = users => {return users.map(el => el.name)}
  
  console.log(getUserNames(users));
  // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]


  // task-02

  const getUsersWithEyeColor = (users, color) => {
    return users.filter(obj => obj.eyeColor === color)
  };
  
  console.log(getUsersWithEyeColor(users, 'blue'));


  // task-03

  const getUsersWithGender = (users, gender) => {
    return users.filter(obj => obj.gender === gender).map(el => el.name)
    
  };
  
  console.log(getUsersWithGender(users, 'male'));


  // task-04

  const getInactiveUsers = users => {
    return users.filter(obj => obj.isActive === false)
  };
  
  console.log(getInactiveUsers(users));



  //  task-05

  const getUserWithEmail = (users, email) => {
    return users.find(el => el.email === email)
  };
  
  console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
  console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

  // task-06

  const getUsersWithAge = (users, min, max) => {
    return users.filter(obj => obj.age >= min && obj.age <= max)
  };
  
  console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
  console.log(getUsersWithAge(users, 30, 40));


  // task-07

  const calculateTotalBalance = users => {
    return users.reduce((arr, item) =>  arr + item.balance, 0)
    };
    
    console.log(calculateTotalBalance(users)); // 20916


// task-08

const getUsersWithFriend = (users, friendName) => {
  return users
  .filter(obj => obj.friends.includes(friendName))
  .map(el => el.name)
  };
  
  console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
  console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]


// task-09

const getNamesSortedByFriendsCount = users => {
  return [...users].sort ((a, b) => a.friends.length - b.friends.length)
  .map (el => el.name)
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]


// task-10

const getSortedUniqueSkills = users => {
  const skillsOfUsers = users.map(el => el.skills);

  const allSkills = [].concat(...skillsOfUsers);


  return [...allSkills].sort();

};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', '
