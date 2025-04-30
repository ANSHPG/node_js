const user = {
    userName: "Anshu",
    price: 99,
    welcomeMessage: function(){
        console.log(`${this.userName}, welcome to website`)   
        console.log(this)
        
    }
}

// user.welcomeMessage()
// user.userName = "Murphy"
// user.welcomeMessage()

// console.log(this)

function chai(){
    let userName = "Scarlette"
    console.log(this.userName) 
}
// chai()

const tea = () => {
    let userName = "Scarlette"
    console.log(this.userName)
}
// tea()

// const addTwo = (num1,num2) => (num1+num2) //implicit

const addTwo = (num1,num2) => ({user: "Murphy"})

console.log(addTwo(6,7));

const myArray = [2,5,3,7,8]

