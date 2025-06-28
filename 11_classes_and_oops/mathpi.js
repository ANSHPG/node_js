class Math2 {
    constructor() {
        this.PI = 4;
    }

    arithmetic() {
        console.log('Hello');
    }
}

const Math3 = {
    PI: 4,
    sqrt: function (num) {
        console.log(`sqrt of ${num} is avaliable!`)
    }
}

// const piAns = new Math2;
// console.log(Math3.sqrt(7));

const descriptor = Object.getOwnPropertyDescriptor(Math3, 'PI')
console.log(descriptor);

Object.defineProperty(Math3, 'PI', {
    writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(Math3, 'PI'));

Math3.PI = 3.144;
console.log(Math3.PI);

for (let [key, value] of Object.entries(Math3)) {
    console.log(`${key} : ${value}`);
}

// Since 'PI' property is not enumerable right now, it can't be included in loop