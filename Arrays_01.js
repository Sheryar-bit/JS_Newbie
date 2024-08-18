//****************ARRAYS*********************//

const myArr = [0,1,2,3,4]
console.log(myArr[1]);

//Array methods
myArr.push(13)
myArr.push(22)
myArr.pop()
console.log(myArr);

myArr.unshift(9)
//Not suitable it adds the value to an array from the starting
console.log(myArr);

//shift() removes the first element of the array
myArr.shift()
console.log(myArr);

//Some question we can ask from Array
console.log(myArr.includes(1));
console.log(myArr.indexOf(2));
console.log(myArr);


const newArr = myArr.join()
console.log(newArr);
console.log(myArr);


//Slice, Splice
//slice shows the element that are included in the range
console.log('A', myArr);
const myn1 = myArr.slice(1, 3)
//output = 1,2
console.log(myn1);
console.log('B', myArr);

//Splice showd the elements that are not included in the range
const myn2 = myArr.splice(1, 3)
console.log("C", myArr);
//output = 0,4,13
console.log(myn2);


