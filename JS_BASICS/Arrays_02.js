const marvel_hereos = ['Iron man', 'Thor', 'Spidermn']
const dc = ['Superman', 'Flash', 'Batman']

marvel_hereos.push(dc)
console.log(marvel_hereos);
//Array ka andar Array agya

const allHereos = marvel_hereos.concat(dc)
//Concat combines two or more array and returns a new array
console.log(allHereos);

//Spraed operation 
const All_new_hereos = [...dc,...marvel_hereos]
console.log(All_new_hereos);

//Flat Operation gets all the array in a single array
const AnotherArray = [1,2,3,[4,5,6],7,[8,[9,10]]]
const real_another_array = AnotherArray.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("sheryar"))
console.log(Array.from("sheryar"))
console.log(Array.from({name: 'Sheryar'}));
//{} = Gives an empy array

let score1 = 100
let score2 = 100
let score3 = 100
console.log(Array.of(score1, score2, score3))
//(of) = returns a new aray from a set of elements
//[100,200,300]