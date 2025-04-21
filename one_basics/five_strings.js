const name = "Anshu"
const repoCount = 50
console.log(`Hello my name is ${name} and my repo is ${repoCount}`) // back-ticks

const  gameName = new String('Murphy') // object

console.log(gameName[0])
console.log(gameName.length)
console.log(gameName.__proto__)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(3))
console.log(gameName.indexOf('u'))

const strip = gameName.substring(0,4)
console.log(strip)

const slice = gameName.slice(-7,3)
console.log(slice)

const trim = "  anshu    "
console.log(trim.trim())

const url = "https://anshu.com/ansp%20murphy"
console.log(url.replace('%20' , '-'))

console.log(url.includes('anshu'))

const arr = "anshp-new-murphy"
console.log(arr.split('-'))










 