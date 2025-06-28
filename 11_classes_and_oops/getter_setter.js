class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get password(){
        return `${this._password.toUpperCase()} is upper case!`
    }

    set password(value) {
        this._password = value
    }
}

const instance = new User('murph@hoax.com', 'aGnt437')
console.log(instance.password);
