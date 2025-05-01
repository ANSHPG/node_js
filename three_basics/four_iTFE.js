// Immediatley Invoked Function Expressions 

(function chai() { //named FE
    console.log("connected to server-kvem$54!");
})(); // {;} important 

((value) => { // unNamed FE
    console.log(`Hi ${value}! server is now connected`)
})("Murphy")