let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate)

let newDate = new Date(2004, 5, 18)
// console.log(newDate.toDateString())

let timeDate = new Date(2002     , 5 , 18 , 18 , 15)
// console.log(timeDate.toLocaleString())

let createDate = new Date("2024-11-08") // international 
// console.log(createDate.toLocaleString())

let createDateIn = new Date("06-18-2004") //Indian
// console.log(createDateIn.toLocaleString())

let timeStamp = Date.now()
// console.log(timeStamp)
// console.log(createDateIn.getTime())
// console.log(Math.floor(Date.now()/1000));

newDate = new Date()
console.log(newDate.getMonth() + 1)

let date = new Date()
let date1 = date.toLocaleString('default' , {
    weekday: "long"
})
console.log(date1)



