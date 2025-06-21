const clrGeneration = () => {
  const Hex = "0123456789ABCDEF";
  let colour = "#";
  "012345".split('').map((i) => (colour += Hex[Math.floor(Math.random() * 16)]));
  console.log(colour);
};

clrGeneration()