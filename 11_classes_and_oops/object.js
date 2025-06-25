function obj(num) {
    return num ** 2;
}

obj.play = 5;
// console.log(obj.play, obj(6), obj.prototype);

// Machine That prints card
function createUser(username, score) {
    this.username = username
    this.score = score
}

//Increase Score Button
createUser.prototype.custom = function(){
    this.score++
}

//Display Name Button
createUser.prototype.display = function(){
    console.log({
        'user': this.username,
        'score': this.score
    });
}

//Two Customers
const instance_1 = new createUser('Valine', 31)
const instance_2 = new createUser('Ira', 27)

instance_1.custom()
instance_1.display()

console.log(instance_1);

// notes on new

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
