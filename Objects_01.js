//singleton
//symbols:
const mysym = Symbol("key1")

//object literals
const JsUser = {
    name: 'Sheryar',
    [mysym]: "mykey1",
    age: 21,
    location: 'Karachi',
    email: 'alisharyar93@gmail.com',
    isLoggedIn: false,
    login: ['Monday', 'Tuesday', 'Friday']
}

//Access the Object
//can be accessed with both ways
console.log(JsUser.name);
console.log(JsUser["name"]);
console.log(JsUser[mysym]);

//To change the objets data
JsUser.email = 'alisharyar94@gmail.com'

//To lock the Objects data
// Object.freeze(JsUser);
console.log(JsUser);

JsUser.greetings = function(){
    console.log('Hello Js User');
}

/*In the below function we are getting the value (name) from the
object that we have created as JsUser*/
JsUser.greetings_2 = function(){
    console.log(`Hello Js User, ${this.name}`);
}
console.log(JsUser.greetings());
console.log(JsUser.greetings_2());



/******Some imp points*******/
//Dot Notation (.): Use it when the property name is a simple, valid identifier known at coding time, This is the most common way to access properties of an object.
//Bracket Notation ([]): Use it when the property name is dynamic, contains special characters, spaces, or is a reserved word, Bracket notation is useful when the property name is stored in a variable or when it contains special characters..