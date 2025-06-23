const user = {
    username: 'murphy',
    loginCount: 8,
    signedIn: true,

    getUserDetails: () => {
        console.log('got details from database');
        console.log(this.username);
    }
}

console.log(user.getUserDetails());
