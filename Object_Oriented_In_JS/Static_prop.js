class User {
    constructor(userName) {
        this.userName = userName;
    }

    logMe() {
        console.log(`Username: ${this.userName}`);
    }

    static createId() {
        return 123;
    }
}

const sheryar = new User('Sheryar')
console.log(sheryar.createId())
console.log(sheryar.logMe());


class Teacher extends User {
    constructor(userName) {
        super(userName)
        this.userName = userName
    }
}

const iphone = new Teacher('Yasir Ali');
console.log(createId());


/*
in simple words, a static property is like a common value or feature that every object of a class shares, 
but you don’t need to create the object to access it. You can access it directly from the class itself.
 */