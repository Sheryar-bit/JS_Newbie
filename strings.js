//*********Strings*********//
const name = "Sheryar"
const age = 25

//Best way to print
console.log(`hello my name is ${name} and my age is ${age}`);

const gameName = new String('Sheryar')
console.log(gameName);
console.log(gameName[0]);

//Built in Functions/Methods
console.log(gameName.charAt(3));
console.log(gameName.toUpperCase());

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-9, 4)
console.log(anotherString);

const newStringOne = "      Sheryar     "
console.log(newStringOne);
console.log(newStringOne.trim());
