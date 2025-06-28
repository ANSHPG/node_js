function user(email, password){
    this._email = email
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase();
        },

        set: function(value){
            this._email = value + '123'
        }
    })
}

const instance = new user('test@trial.com', `3526l`)
console.log(instance.email);
