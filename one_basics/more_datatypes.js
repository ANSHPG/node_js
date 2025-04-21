//  primitive
//  7 types: String , Boolean , Number , null , undefined, Symbol, BigInt

//  reference
//  array , Objects(imp) , Functions

// Number = 100, 100.3
// Boolean = true , false
// Symbol
const id = Symbol("123");
const anotherId = Symbol("123");
console.log([id, anotherId]);
// BigInt = 123456789n

const heroes = ["ironman", "captainamerica", "blackpanther"];
let myObj = {
  name: "anshu",
  age: 22,
};

const myFunction = function () {
  console.log("hello world from function");
};

// ________________________________________________________________________________

//  stack(Primitive) , Heap(refernce)

let name = "Anshu"
let anotherName = name
console.log(anotherName)
anotherName = "Murphy"
console.table([name , anotherName])

let userOne = {
  email: "anshu@gmil.com",
  upi: "user@ybl"
}

let userTwo = {
  email: "murphy@gmil.com",
  upi: "user2@ybl"
}

let userThree = userOne
userOne.email = "ziggogle.com"

console.table([userOne.email , userThree.email])