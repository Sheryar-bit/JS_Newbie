//ES6

class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    encryptPassword() {
        return `${this.password}abc`
    }
    ChangeUserName() {
        return `${this.name.toUpperCase()}`
    }

}

const JS = new User('Language', 'JS@gmail.com','123')
console.log(JS.encryptPassword()) // 123abc
console.log(JS.ChangeUserName()) // LANGUAGE

//behindthe scene 

function User (name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
}

User.prototype.encryptPassword = function () {
    return `${this.password}abc`
}