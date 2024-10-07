//change the name of a calue inside a object

const product = {
    name: 'Iphone',
    price: '$1000'
}
product.name = 'Iphone X'
console.log(product);

//add items in the object
product.quantity = true
console.log(product);

//Delete items from the objects
delete product.quantity
console.log(product);

/**Now making a simple counter using object**/
const course = {
    CorseName: "javascript",
    price: 1000,
    MyName: 'Sheryar'
}
const {MyName} = course
console.log(MyName);

//JSON
//JSON stands for JavaScript Object Notation
// {
//     'name': 'Zakir',
//     'Course': 'JS',
//     'price': 'Free'
// }
