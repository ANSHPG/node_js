const marvel = ["ironman" , "thor" , "falcon" , "captainamerica"]
const dc = ["superman" , "batman" , "wonderwoman"]

// marvel.push(dc)
// console.log(marvel)
let justice = marvel.concat(dc)
// console.log(justice)

const newLeague = [...marvel, ...dc]
// console.log(newLeague)

const combine = [1,2,3,[5,6,7,[4]]]
// console.log(combine.flat(Infinity))

console.log(Array.isArray("Anshu"))
console.log(Array.from("Anshu"))

let score1 = 100
let score3 = 300
let score2 = 200




