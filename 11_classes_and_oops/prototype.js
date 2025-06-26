// let userName = 'Murphy    '

function username(id) {
    this.id = id;
}

username.prototype.trueLength = function () {
    return this.id.trim().length;
    
}

const userName = new username('Murphy      ')         
// console.log('result:',userName.trueLength());

// Inheritance
String.prototype.trimLength = function(){
    // return this.child.trim().length;
    return this.trim().length
}

const custom = 'Liviera      ';
// console.log(custom.trimLength());
// console.log('jguygyogu      '.trimLength())

const parent = {
    'car': 'BMW M8',
    'engine': 'V8 2L'
}

const child = {
    'car': 'TOYOTA PRIUS',
    'engine': 'V6 0.75L',
    'inherit': parent,
    __proto__ : {
        desmos: function(){
            console.log(this.inherit);
        }
    }
}
console.log(child, '\n',child.__proto__.desmos());
