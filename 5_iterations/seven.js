const nums = [1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10];

const newNums = nums.map((num) => num + 10);
// console.log(newNums);

const newNumber = nums
.map((num) => num * 10)
.map((num) => num+1)
.filter((num) => num>40)

console.log(newNumber)
