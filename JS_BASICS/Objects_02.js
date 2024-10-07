// Objects can be created by 2 ways
const linkdin1 = new Object()
const linkdin2 = {}

linkdin2.id = '1234'
linkdin2.name = 'John Doe'
linkdin2.email = 'john.doe@example.com'
console.log(linkdin2);

//Object inside Object (nested)
const RegulerUser = {
    email: 'ali@gmail.com',
    name: 'Ali',
    fullname: {
        userFullname: {
            firstname: 'Muhammad',
            Lastname: 'Sheryar'
        }
    }
}

console.log(RegulerUser.fullname.userFullname);

//Merge Two or more Objects
const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'a', 4: 'b'}
//here {} = target and obj1, obj2 are source
const obj3 = Object.assign({}, obj1, obj2)

//another way to merge objects is 
const obj4 = {...obj1, ...obj2}
console.log(obj3);

//Database
const usser = [
    {
        email: 'hola@wm'
    },
    {

    }
]

usser[1].email
console.log(linkdin2);
console.log(Object.keys(linkdin2));
console.log(Object.values(linkdin2));
console.log(Object.entries(linkdin2));

