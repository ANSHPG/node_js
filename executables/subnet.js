const ipMap = (ipStr) =>
  ipStr
    .split(".")
    .map((octect) => subOne(binr(Number(octect))))
    .reduce((a, b) => a + b, 0);

const binr = (octectInMap) => {
  let ipStr = "";
  for (let control = 0; control < 8; control++) {
    ipStr = parseInt(octectInMap % 2) + ipStr;
    octectInMap = octectInMap / 2;
  }
  return ipStr;
};

const subOne = (octectInStr) => {
  let sumOne = 0;
  for (let character of octectInStr)
    character == "1" ? (sumOne += 1) : (sumOne += 0);
  return sumOne;
};

// console.log(ipMap("103.169.154.42"))
const snBit = ipMap("103.169.154.42") - 8

