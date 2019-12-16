const countTotalSalary = function(employees) {
    let total = 0;
    for (let sallery in employees) {
    total += employees[sallery] }
    return total
  };

  console.log(
    countTotalSalary({
      mango: 100,
      poly: 150,
      alfred: 80,
    }),
  ); // 330


  console.log(
    countTotalSalary({
      kiwi: 200,
      lux: 50,
      chelsy: 150,
    }),
  ); // 400