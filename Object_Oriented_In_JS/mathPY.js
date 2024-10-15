//getOwnPropertyDescriptor tells the hidden property of an object
const discritor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(discritor);

// `{
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }

//qs) can we change a constant value of an object? If not lets findout why?
console.log(Math.PI);
//3.14


const chai = {
    name: "Ginger Chai",
    price: 250,
    isAvaialable: true
}

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));
/*{
    value: 'Ginger Chai',
    writable: true,
    enumerable: true,
    configurable: true
  }*/

Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));
/*
{
  value: 'Ginger Chai',
  writable: false,
  enumerable: false,
  configurable: true
}*/

for (const [key, value] of chai) {
    console.log(`${key} : ${value}`);
}
//Error: chai is not iterable
