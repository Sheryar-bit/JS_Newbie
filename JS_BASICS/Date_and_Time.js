//*********Date And Time***********//
let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleTimeString());

console.log(typeof myDate);
//Object

let otherDate = new Date(2024, 0, 23, 5, 6)
//Months starts fom 0 in JavaScript
console.log(otherDate.toLocaleString());

let someDate = new Date("08-18-2024")
console.log(someDate.toLocaleString());

//**************Time**************** */
let myTimeStamp =Date.now()
console.log(myTimeStamp);
console.log(someDate.getTime());
//Will give output in Milliseconds

//To convert in seconds
console.log(Math.floor(Date.now()/100));


let NewDate = new Date()
console.log(NewDate.getDate());
console.log(NewDate.getDay());

NewDate.toLocaleString('default', {
    weekday: "short",
    day: "numeric",
})

