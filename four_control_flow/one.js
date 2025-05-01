const isUserLoggedIn = true;

if (2 === "2") {
  console.log("executed");
}

// < > <= >= == !=

const temperature = 91;

// if (temperature == 50) {
//   console.log("temperature is less than 50");
// } else {
//   console.log("greater than 50");
// }

// console.log("Execute");

// const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`user power: ${power}`);
// }

// console.log(`user power: ${power}`)

const balance = 1000;

if (balance < 500) console.log("test"), console.log("test2");

if (balance < 500) {
  console.log("less than 500");
} else if (balance < 750) {
  console.log("less thsn 750");
} else if (balance < 900) {
  console.log("less than 900");
}
// } else {
//   console.log("less than 1200");
// }

const UserLoggedIn = true;
const debitcard = true;
const loggedInFromEmail = true;
const loggedInFromGoogle = false;

if (UserLoggedIn && debitcard && 2 === "2") {
  console.log("Allow to buy course");
}

if (loggedInFromEmail || loggedInFromGoogle) {
  console.log("User Logged in");
}
