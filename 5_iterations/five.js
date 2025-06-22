array = ["ironMan", "captainAmerica", "thor", "hulk", "hawkEye"];

// array.forEach(function (item) {
//   console.log(item);
// });

// array.forEach((item) => {
//   console.log(item);
// });

// function printMe(item) {
//   console.log(item);
// }

// array.forEach(printMe);

// array.forEach((item, index, arr) => {
//   console.log(item, index, arr);
// });

const code = [
  {
    name: "javaScript",
    file: "/js",
  },

  {
    name: "java",
    file: "/java",
  },

  {
    name: "python",
    file: "/py",
  },
];

code.forEach((obj) => {
  console.log(obj["name"]);
});
