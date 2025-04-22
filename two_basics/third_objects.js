// singleton 

// objectLiteral 
const sym = Symbol("key1") 
const JsUser = {
    name: "Anshu",
    age: 18,
    location: "BBSR",
    isLoggedIn: "false",
    lastLoggedIn: ["Monday" , "Friday"],
    "full Name": "Murphy",
    [sym] : "key2"
}

// console.log(JsUser.location)
// console.log(JsUser["location"])
// console.log(JsUser["full Name"])
// console.log(JsUser[sym])

JsUser.location  = "Delhi"
Object.freeze(JsUser)
JsUser.location  = "BLR"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello user")
}
console.log()

