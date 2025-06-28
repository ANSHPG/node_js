const user = {
    _email : 'vienna@morgan.com',
    _password : 'morgan432',

    get email(){
        return this._email.toUpperCase();
    },

    set email(val){
        this._email = val + '124'
    }
}

const instance = Object.create(user)
console.log(user.email);
