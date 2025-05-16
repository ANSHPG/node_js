const classSegr = (first_octect) => {
  if (first_octect < 0) return "not servicable", null;
  else if (first_octect <= 127) return "A", 8;
  else if (first_octect <= 191) return "B", 16;
  else if (first_octect <= 223) return "C", 24;
  else if (first_octect <= 239) return "D", null;
  else if (first_octect <= 255) return "E", null;
  else return "not servicable", null;
};

const nID = (ipArr) => {
    classVar , bit = classSegr(ipArr[0])
    if (classVar === "A"){
        
    }
}

console.log(classSegr(-79));
