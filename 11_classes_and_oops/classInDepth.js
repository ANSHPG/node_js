// After ES6

class user {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword() {
        return `${this.password}meta`
    }
}

const instance = new user('murphy', 'murph@hox.com', 'agent4397');

console.log(instance.encryptPassword());

// Behind the hood

function users(username, email, password) {
    this.username = username
    this.email = email
    this.password = password
}

users.prototype.encryptPasswords = function(){
    return `${this.password}meta`
}

const hood = new users('murphy', 'murph@hox.com', 'agent4397')

console.log(hood);

