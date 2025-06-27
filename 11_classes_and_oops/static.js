class user {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }

    allow() {
        console.log(`${this.username} is worthy!`);
    }

    static not_allow() {
        console.log(`${this.username} `)
    }
}

const instance = new user('murphy', 'murphy@hoax.com', 'aGent473')
instance.allow()
try {
    instance.not_allow()
}
catch (error) {
    console.log(`${instance.username} is not worthy!`)
}