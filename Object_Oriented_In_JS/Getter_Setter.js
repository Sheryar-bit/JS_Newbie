class user {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    get email() {
        return `${this._email}hello123@gmail.com`;
    }
    set email(val) {
        this._email = val;
    }


    get password() {
        return `${this._password}sheryar`;
    }
    set password(value) {
        this._password = value;
    }
}



const sheryar = new user("Email: ", "Password: ");
console.log(sheryar.password);
console.log(sheryar.email);




function user1(num, name) {
    this.num = num;
    this.name = name;
}



//Getter and Setters using properties

Object.defineProperty(this, 'num', {
    get: function () {
        return this._num;
    },

    set: function (value) {
        this._num = value
    }
})

Object.defineProperty(this, 'name', {
    get: function () {
        return this._name;
    },

    set: function (value) {
        this._name = value
    }
})

const js = new user1('+920000000', 'Sheryar')
console.log(js.num);
console.log(js.name);



//Using Object 
const user2 = {
    _language: 'JavaScript',
    _Role: "backend development",


    get language() {
        return `${this._language}JavaScript`;
    },

    set language(value) {
        this._language = value
    },

    get Role() {
        return `${this._Role}Backend Developer`;
    },

    set Role(value) {
        this._Role = value
    }

}

const obj = Object.create(user2);
console.log(`Language: ${obj._language}`);
console.log(`Role: ${obj._Role}`);

/*
In JavaScript, getters and setters allow you to control how properties of an object are accessed and updated.
Getters: Used to get (or read) the value of a property. It lets you define logic that runs when you access the property.
Setters: Used to set (or update) the value of a property. It allows you to define logic that runs when you assign a new value to the property.*/