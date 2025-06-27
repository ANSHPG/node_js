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

// let arr = [1, 2, 3,9,5,75,9642,67964,9,4,6,7,8];
// arr[10] = 99;
// console.log(arr[8],arr.splice(8,1),arr[8]);