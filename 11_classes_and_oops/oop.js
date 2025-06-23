const user = {
    username: 'murphy',
    loginCount: 8,
    signedIn: true,

    getUserDetails: () => {
        console.log('got details from database');
        console.log(this.username);
    }
}

// console.log(user.getUserDetails());

// const promiseOne = new Promise() 
// const date = new Date()

function test(username, loginInCount, isLoggedIn) {
    this.username = username
    this.loginInCount = loginInCount
    this.isLoggedIn = isLoggedIn
    this.greeting = () => {
        console.log(this.username);
    }

    return (this)
}

const murph = new test('murph', 12, true)
const iron = new test('iron', 98, false)
console.log(murph.constructor);

const url = 'https://api.github.com/events'
async function prac() {
    try {
        const resolve = await fetch(url);
        const response = await resolve.json();
        const data = {
            'type': response[0].type,
            'repository': response[0].repo.url
        }
        console.log('results:', data);
    }
    catch (reject) {
        console.log('Err:', reject);
    }
}
// prac();