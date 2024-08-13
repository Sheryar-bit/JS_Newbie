let score = "33abc"

console.log(typeof score)
console.log(typeof (score))

let valueINNumber = Number(score)
console.log(typeof valueINNumber)

// "33" => 33
// "33abc" => NaN
// true => 1; False => 0

let isLoggedIN = 1

let booleanIsLoggedIn = Boolean(isLoggedIN)
console.log(booleanIsLoggedIn)

// 1 => true; 0 => false
// "" => false
//"sheryar" => true


//in the below code we have converted the number to a string datatype
let ScoreNum = 47
let StringNum = String(ScoreNum)
console.log(StringNum);
// ****** operations **********
let value = 3
let negval = -value
console.log(negval);

console.log("1" + 2)
// "12"
console.log(1 + "2")
// "12"
console.log("1" + 2 + 2)
// "122"
console.log(1 + 2 + "2")
// "32"  // 1 + 2 = 3 then 3 + "2"
console.log(1 + 2 + 2 + "2")
//52

console.log(+true)
// 1
console.log(+"")
// 0

let GameCounter = 100
GameCounter++;
console.log(GameCounter);
// 101