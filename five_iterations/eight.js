const nums = [1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10];

const total = nums.reduce(function (acc, curVal) {
  //   console.log(`acc: ${acc} \ncurrent value: ${curVal} \n-------------------`);

  return acc + curVal;
}, 0);

const shrtTtl = nums.reduce((acc, curVal) => acc + curVal, 0);
// console.log(shrtTtl);

const shoppingCart = [
  { name: "Wireless Mouse", price: 25.99 },
  { name: "Bluetooth Headphones", price: 59.49 },
  { name: "Laptop Stand", price: 32.0 },
  { name: "USB-C Hub", price: 19.99 },
  { name: "Notebook Cooling Pad", price: 27.5 },
];

sum = 0;
const totalAmount = shoppingCart
  .map((nums) => nums["price"])
  .reduce((acc, curVal) => acc + curVal, 0);

  console.log(totalAmount);
  