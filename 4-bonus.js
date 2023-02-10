let salary = prompt("Enter the salary")
salary = Number.parseInt(salary)

let year = prompt("Enter the year of service")
year = Number.parseInt(year)

let bonus
if (year >= 5) {
  bonus = salary * 10 / 100
  console.log('Your bonus: %d', bonus)
  salary = salary + bonus
  console.log('Total Salary:', salary)
}

else {
   console.log('Total Salary:', salary)
}