const userEMail = "murphy@ai";

// if (userEMail) {
//   console.log("Got user email");
// } else {
//   console.log("Dont move!");
// }

//  falsy values
//  false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], function(){}

if (userEMail.length === 0) {
  console.log("Array is Empty");
}

const obj = {}
if (Object.keys(obj).length === "0"){
    console.log("empty oject");
}

// Nullish Coalescing Operator 

let val1;
val1 = 5 ?? 10
val1 = null??10
// console.log(val1);

val1 = undefined??15
// console.log(val1);

val1 = null ?? 10 ?? 20
// console.log(val1);

// Ternary Operator
const iceTeaPrice = 160
iceTeaPrice >= 80 ? console.log("more than 80") : console.log("less than 80") 

