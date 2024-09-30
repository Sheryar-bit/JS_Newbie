/* Definations:
map(): Transforms every element and returns a new array.
filter(): Filters out elements based on a condition and returns a new array.
forEach(): Executes a function on each element, but doesn’t return anything (useful for side effects).
*/


const coding = ['js', 'cpp', 'c', 'java']

const values = coding.forEach(function (item) {
    console.log(item);
    return item
})

// console.log(values);

//Filters Basics:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const newNUmbers = numbers.filter(function (num) {
    return num > 5

})
console.log(newNUmbers);

//Doing the above problem usig forEach
const numbers2 = []
numbers2.forEach(function (numbers) {
    if (numbers2 > 5) {
        numbers2.push(numbers)
    }
})
console.log(numbers2);


//Excersise:
//You receive value from the database
const data = [
    {
        booknum: '01', genre: 'Fiction', publish: '1990'
    },
    {
        booknum: '02', genre: 'Comedy', publish: '1996'
    },
    {
        booknum: '03', genre: 'Romantic', publish: '1999'
    },
    {
        booknum: '04', genre: 'Action', publish: '1993'
    },
    {
        booknum: '05', genre: 'Anime', publish: '1999'
    },
    {
        booknum: '06', genre: 'Fiction', publish: '1999'
    }
]

//Book should be published after 1993
let userBooks = data.filter(function (bk) {
    return bk.publish > '1993'
})
console.log(userBooks);


//book should have BookNum of 2
userBooks = data.filter(function (bk) {
    return bk.booknum === '02'
})
console.log(userBooks);


//book should be published after 1996 and the genre should be Anime:
userBooks = data.filter(function (bk) {
    return bk.genre === 'Anime' && bk.publish > 1996;
})
console.log(userBooks);


//add 1 to every element of an array using map function
const mynum3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const res = mynum3.map(function (num) {
    return num + 1;
})
console.log(res);


// doing the same above ques using forEach:
const mynum4 = [1, 2, 3, 4, 5, 6, 7];
const res2 = mynum4.forEach(function (num) {
    console.log(num + 100)
})
console.log(res2);

//Personlay I think Filter method is the best



//CHAINING
//In chaining you can y=use 2 3 method at the same time

const mynum5 = [1, 2, 3]

const res3 = mynum5.map(function (val1) {
    return val1 * 2
})
    // we get 2,4,6

    .map(function (val2) {
        return val2 * 10
    })
    // we get 20, 40, 60

    .filter(function (val3) {
        return val3 > 20;
    })
//we get 40, 60

console.log(res3);



/*REDUCE: 
The reduce() method in JavaScript is used to take an array and reduce it to a single value.
It does this by applying a function to each element of the array, one by one, and keeping track of the result.
In this we use an Accumulator that stores the value that we initializze, currentvalue that takes the current val from the array */
const someNumber = [1, 2, 3]
const res4 = someNumber.reduce(function (accumulator, current) {
    console.log(`acc: ${accumulator} and current: ${current}`);
    return accumulator + current;
}, 0)
console.log(res4);


const shoppingCart = [
    {
        courseName: "JS course",
        price: 1000
    },
    {
        courseName: "Java course",
        price: 1000
    },
    {
        courseName: "Python course",
        price: 2000
    },
]

const bill = shoppingCart.reduce( function(acc, item) 
{
    return acc + item.price;
}, 0)

console.log(bill);
