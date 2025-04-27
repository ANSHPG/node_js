//singleton
// const obj = new Object ()

const tinder = {
    id: "123abx",
    name: "selena",
    isLoggedIn: false
}

// console.log(tinder)

const user = {
    email: "murphy@gmail.com",
    fulName: {
        firstName: "Georgie",
        middleName: null,
        lastName: "Sheldon"
    }
}

// console.log(user['fullName']?user['fullName']['firstName']:`the Full Name of ${user['email']} is not avaliable!`)

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "a",
    4: "b"
}

const obj4 = {
    5: "a",
    6: "b"
}

const obj3 = Object.assign({},obj1,obj2,obj4) // (target:{}, source:{obj1,obj2,oj3})
// console.log(obj3)
// console.log(obj1)

const obj5 = {...obj1,...obj2,...obj4} //spread
// console.log(obj5)

const dB = [
    {
        1: "a",
        2: "b"
    },
    
    {
        3: "a",
        4: "b"
    },

    {
        5: "a",
        6: "b"
    },   
]

// console.log(dB[1]["4"]) 

// console.log(Object.keys(tinder))
// console.log(Object.values(tinder))
// console.log(Object.entries(tinder))

// console.log(tinder.hasOwnProperty('gender'))

const course = {
    courseName: "Js in Jp",
    price: "78.99",
    courseInstructor: "Zenin"
}

const {courseInstructor:instructor} = course
console.log(instructor)

