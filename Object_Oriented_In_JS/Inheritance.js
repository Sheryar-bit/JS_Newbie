class user {
    constructor(name) {
        this.name = name
    }

    logMe() {
        console.log(`UserName is ${this.name}`);
    }
}

class Teacher extends user {
    constructor(name, email, password) {
        //super is used to access and call functions on an object's parent class.
        super(name);
    }

    addCourse() {
        console.log(`A new Course was added by ${this.name}`);
    }
}

const chai = new Teacher('Chai', "123@gmail.com", '123')

chai.addCourse()

const masalaChai = new User('masala Chai');
masalaChai.logMe()

console.log(chai === masalaChai);
//False

console.log(chai instanceof Teacher);
//True

