//Call and This in JS

function SetUserName(userName) {
    this.userName = userName;
}

function createUser(userName, email, password){
    SetUserName.call(this, userName)


    this.email = email;
    this.password = password;
}

const sheryar = new createUser('Google', "google@gmail.com", '123')
console.log(sheryar);
