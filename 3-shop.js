let unitCost = 100;
let quantity = prompt("Enter the quantity you would like to purchase:")
let totalCost = unitCost*quantity;

if (quantity >= 1000) {
  totalCost = totalCost*0.9
  console.log("You are eligible for a 10% discount. Your total cost is: " + totalCost)
} else {
  console.log("Your total cost is: " + totalCost)
}
