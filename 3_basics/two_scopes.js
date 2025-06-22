let a = 300

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;

//   console.log("INNER :",a);
//   function addNum() {}
}

// console.log(a);
// console.log(b);
// console.log(C);

function one(){
    const username = "Anshu"

    function two(){
        const website = "youTube"
        console.log(username)        
    }

    // console.log(website)
    two()
}

// one()

if(false) {
    const username = "Anshu"
    if (username == "Anshu"){
        const website = "YouTube"
        console.log(username)
    }
    console.log(website)
}

// _____________________________________________________________________

console.log(addOne(8))
function addOne(value) {
    return value+1
}

const addNum = function(num){
    return num+1
}
console.log(addNum(8))