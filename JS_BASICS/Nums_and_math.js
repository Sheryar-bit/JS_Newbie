const score = 500

const balance = new Number(100)
console.log(balance)

console.log(balance.toString().length);
//3
console.log(balance.toFixed(2));
//100.00

const somNum = 123.432
console.log(somNum.toPrecision(4));

const Hundreds = 1000000
console.log(Hundreds.toLocaleString('en-PK'));

// ++++++++++++++++++++++++++++++ Math ++++++++++++++++++++++//
console.log(Math);
//Object [Math]
console.log(Math.abs(-4));
//4
console.log(Math.round(4.6));
//5
console.log(Math.ceil(4.3));
//5
console.log(Math.floor(4.3));
//4
console.log(Math.pow(3,3));
//27
console.log(Math.random());
//Gives value From ) 0 - 1
console.log((Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) 
//Gives value between range of 10 and 20






