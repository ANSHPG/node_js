// ip to object converter

const ipv4Adr = {
  first: 0,
  second: 0,
  third: 0,
  fourth: 0,
};

const convD_B = (num) => {
  if (num == 0) return "0";
  let str = "";
  while (num > 0) {
    str = (num % 2) + str;
    num = parseInt(num / 2);
  }
  return str;
};

const ipMap = (ipStr) => ipStr.split(".").map((num) => Number(num));
const ipv4$conv = (ipv4) => ipMap(ipv4).map((num) => convD_B(num));

for(let key in ipv4Adr) {
    console.log(ipv4Adr[key]);
}

console.log(ipv4$conv("192.168.0.1"))