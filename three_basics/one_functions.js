function xerox(){
    console.log('Hello World')
}

// xerox()
function add(number1 , number2 , number3){ // {numbers} : parameters
    return number1+number2+number3 
}

const result = add(4,"5",6) // {inputs}: arguments 
// console.log(`the answer is ${result}`)

function login(username) {
    if (!username) {
        console.log(`${username} not Found`)
        return
    }
    return `${username}`
}
// console.log(login())

function calculatePrice(val1,val2,...num1){  //{`...`} => spread
    return num1
}

// console.log(calculatePrice(200,400,500,600));

const user = {
    userName:"Murphy",
    price: 990
}


function objReturn(anyObject){
    console.log(`username : ${anyObject['userName']} \nprice : ${anyObject['price']}`)
}

console.log(objReturn(user));
