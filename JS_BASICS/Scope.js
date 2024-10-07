let a = 10
const b =20
var c = 30

function one() {
    const teacher = 'Hitesh'
    function two() {
        const student = 'Sheryar'
        console.log(teacher);
    }
    // console.log(student);
    
    two()
}
one()

// console.log(teacher); // ReferenceError: teacher is not defined
// console.log(student); // ReferenceError: student is not defined

function addone(num) {
    return num + 1
}
console.log(addone(10)); // 11

//Another way
const addTwo = function(num) {
    return num + 2
}
addTwo(10)