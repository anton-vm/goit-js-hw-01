const countProps = function(obj) {
  let i=0
  for (let a in obj) {
i++
  }
  return i
};

console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3