//Loops

let sum = 0;
for (let index = 0; index <= 10; index++) {
    sum = sum + index;
    }
    console.log(sum);



let myArray = ['ali', 'ahmad', 'sheryar', 'khizar']
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);

}

//break and continue:
for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log(`My favourite number ${i}`);
        break;
    }
    console.log(`value of I = ${i}`);  
}

//High Order Array Loops:

// 1) for of
let myArry = ['ali', 'ahmad', 'sheryar', 'khizar']

for (const i of myArry) {
    console.log(i);
}

const greetings = "Assalamualaikum";
for (const i of greetings) {
    console.log(`Each Char is ${greetings}`);
} 

//Maps
//Map Objects holds key VAlue pairs and remembers the orignal insertion order of the keys.
const map = new Map()
map.set('PK', 'Pakistan')
map.set('IN', 'India')
map.set('FR', 'France')

console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

// const Games = {
//     'game1': 'Pubg',
//     'game2': 'Fortnite'
// }
// for (const [key, value] of Games) {
//     console.log(key ,'=', value);  
// }
// //Object cant be iterate with for Of Loops


//FOR IN LOOP
const MyOBj = {
// key: 'MyOBj[key]'
    js: 'JavaScript',
    cpp: 'C++',
    rb: 'Ruby'
}

for (const  key in MyOBj) {
    console.log(`${key} is shortcut is for ${MyOBj[key]}`);
}

const programming = ['java','cpp', 'JS']
for (const key in programming) {
    console.log(programming[key]);    
}


/*IMP NOTES
in for of loop the key gives us the key number or the index of the Array 
where as
in For in loop the key gives us the exact element in the Array
*/

//MOst Imp Loop:
//forEach Loop

const coding = ['javaaaaa', 'js','cpp']

coding.forEach( function (item) {
    console.log(item);
} )

coding.forEach( (item) => {
    console.log(item);
    
} )

function printMe(item) {
    console.log(item);
}
coding.forEach(printMe)

coding.forEach( function (item, index, Array) {
console.log(item, index, Array);

} )

const cars = [
    {
        carname: 'corolla',
        ownerName: 'sheryar'
    },
    {
        carname: 'Civic',
        ownerName: 'Yasir'
    },
    {
        carname: 'Mehran',
        ownerName: 'Khizar'
    }
]

cars.forEach( function (item) {
    console.log(`${item.carname} car is of, ${item.ownerName}`);
} )