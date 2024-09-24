//This keyword refers the current context
const user = {
    name: 'Sheryar',
    age: 21,

    welcomeMessage: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age}`)
    }
}

user.welcomeMessage()
user.name = "sam"
user.welcomeMessage()

console.log(this); //{} empty


// function chai() {
//     console.log(this); //window object in browser and global object in nodejs
// }
// chai()

//Arrow Function 
const arrowFunction = () => {
    let username = 'Sheryar Ali'
    console.log(this);
}
arrowFunction()

//Explicit Return
const addthree = (num1,num2) => {
    return num1 + num2
}
console.log("The addition of 5 and 6 will be: ",addthree(5,6));



//Implicit Return 
const addthreee = (num1, num2) => num1 + num2
console.log("The addition of 2 and 2 will be: ",addthreee(2,2))





