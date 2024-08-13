const isLoggedIN = false
const outsideTemp = null

let UserEmail;
//undefined

const id = Symbol('111')
const anotherid = Symbol('111')

console.log(id === anotherid);
//False
//In JavaScript, Symbol is a unique and immutable data type. When you create a new Symbol,
// even if you provide the same description (in this case, '111'), each Symbol is guaranteed 
//to be unique.

const BigNum = 1233456789n
//BigInt

//***********Reference (Non Primitive)**************//
//Arrays, Objects, Functions

const hereos = ['Superman', 'Batman', 'Deadpool'];
let myOBJ = {
    name: "Sheryar",
    age: 21,
}

//Function
const MyFunc = function() {
    console.log("Hello World");
}
console.log(typeof MyFunc);
//function


console.log(typeof BigNum);
//bigint