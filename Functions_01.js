//Functions
function myFunc() {
    console.log("Sheryar");
    
}
myFunc()

//PARAMETERE
function myFunc1(name,age) {
    console.log(name);
    console.log(age);
}
myFunc1('sheryar',21)

//Difference between Parametre and Arguments
//Parameter: the value that you pass in ther function
//Argument: when you call a functions and pass some data that is called Argument

//Other way to declare a function
const count = function() {
    console.log("Other way");
}

//Another way to declare function
function add2num(number1,number2) {
    return number1 + number2
}
const result = add2num(2,66)
console.log("Result:" , result);

//If you pass no value in the Argument you get Undefined
function loginUsername(username) {
    if (username === undefined) {
        console.log("Error");
        return
        }
    return `${username} just logged In`
}
console.log(loginUsername())

//In the below code it will always show that Ali Logged In
function loginUsername2(username2 = "Ali") {
    if (username2 === undefined) {
        console.log("Error");
        return
        }
    return `${username2} just logged In`
}
console.log(loginUsername2())



//SHOPPING CART QUERY (passing multiple values in Argument)
//... (rest operator)
function calculateCartPrice(...num1) {
    return num1
}
console.log(calculateCartPrice(2,4,6,8));

//Funtions with objects and array
const user = {
    name: "sheryar",
    price: 200
}
function handlingObject(anyObject) {
    console.log(`Username is ${anyObject.name} and price is ${anyObject.price}`);
}
handlingObject(user)

//Another Way 
handlingObject({
    name: "sheryar",
    price: 200
})

//For Arrays
const MyArray = [200,300,400]
function returnSecondValue(getArray) {
    return getArray[2]
}
console.log(returnSecondValue(MyArray));
//Anotherway
console.log(returnSecondValue([1,2,4,5,6,7]));
