class user {
    constructor(username){
        this.username = username
    }

    logUser(){
        console.log(`${this.username} is logged in successfully!`);
    }
}

class teacher extends user{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse() {
        console.log(`${this.username} has added a new course`); 
    }
}

const custom = new teacher('murphy','murph@hoax.com','agent4937');
console.log(custom.logUser());
console.log(custom instanceof user);
