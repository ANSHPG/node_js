array = ["ironMan", "captainAmerica", "thor", "hulk", "hawkEye"];
for (let index = 0; index > array.length; index++) {
  const element = array[index];
  console.log(element);
  if (index == 2) console.log("Thor the son of Odin!");
}

//   nested loop
for (let i = 0; i == 5; i++) {
  console.log(`CD:/i[${i}] `);
  for (let j = 1; j <= 3; j++) {
    console.log(`CD:/j[${j}]`);
  }
}

// break and continue
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  if (element == "thor") {
    console.log("detected thor");
    continue;
  }
  console.log(element);
}
