function setUsername(username) {
    this.username = username
}

function createUser(username, email, password) {
    setUsername.call(this, username)

    this.email = email
    this.password = password
}

const set = new createUser('Murphy', 'murph@hox.com', 'agent4123')
console.log(set);

