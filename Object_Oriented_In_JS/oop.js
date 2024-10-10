const user = {
    userName: 'Sheryar',
    logginCount: 10,
    signedIn: true,
    
    //This keyword is used to tell the current context
    getUserDetails: function() {
        console.log(`UserName:${this.userName}`);
        console.log(this);
    }
}

console.log(user.userName);
console.log(user.getUserDetails());


function User(user, loginCount, isLoggedIn) {
    this.username = user;
    this.LoginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    
    return this
}

const userOne = User('Sheryar', 10, true)
console.log(userOne.constructor);

function Car(make, model, year) {
    this.make = make;
    this.mode = model;
    this.year = year;
}
    const Auto = new Car('Honda', 'Accord', 2021);
    console.log(Auto instanceof Car);
    //true
    console.log(Auto instanceof Car);
    //true
    console.log(Auto instanceof Object);
    //true