    /*
    A Promise is a Object in JavaScript is like a "placeholder" for a value that will be available in the future. It represents an operation that hasn’t completed yet but is expected to.
    When we work with things that take time, like getting data from a server, instead of blocking the code and waiting, JavaScript returns a promise. This promise will either:
    Resolve (success): The operation was successful and gives back the result.
    Reject (failure): The operation failed and provides the error.
    A promise can be in one of three states:
    Pending: The operation is still in progress.
    Fulfilled: The operation completed successfully.
    Rejected: The operation failed
    */


    // making a promise
    const promisOne = new Promise( function(resolve, reject) {
        //Do an async task
        //DB calls , cryptography, network
        setTimeout(function(){
            console.log('Async task is complete. ');
            resolve()  
        }, 100)
    });
//consuming promise
//resolve is connect with .then()
promisOne.then(function() {
    console.log('Promise is resolved');
})

new Promise( function(resolve, reject) {
    setTimeout(function (){
        console.log("Async Task 2");
        resolve()
    }, 1000)
}).then( function() {
    console.log("Promise 2 is resolved");
})

//In the below Example we get the data using promisee
const promiseThree = new Promise( function (resolve, reject) {
    setTimeout(function() {
        resolve({userName: "Sheryar", email: "alisharyar93@gmail.com"})
    }, 1000)
})

promiseThree.then( function(user) {
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function() {
        let error = true;
        if(!error) {
            resolve({userName: "sheryar", password: "123"})
        }
        else{
            reject("Error")
        }
    }, 1000)
})

promiseFour.then( function (user) {
    console.log(user);
    return user.userName 
})

.then( function(userName) {
    console.log(userName);
})

.catch(function(error) {
    console.log(error);
})

.finally( function() {
    console.log("Finally");
})

const promiseFive = new Promise( function(resolve, reject) {
    setTimeout( function() {
        let error = true;
        if(!error) {
            resolve({userName: "Yasir", password: "123"})
        }
        else {
            reject("Error: Invalid Passwaord")
        }
    }, 1000)
})

/*
Async/Await makes it easier to work with promises in JavaScript, allowing you to write asynchronous code that looks and behaves more like regular, synchronous code.

Key Concepts:

Async Function:
When you declare a function as async, it automatically returns a promise. This means that inside this function, you can handle asynchronous operations (like API calls, file loading, etc.).
The async keyword allows you to use await inside the function.

Await:
await pauses the execution of the function until the promise is resolved or rejected. It's like telling JavaScript to "wait" for a promise to finish.
Once the promise is resolved, the result is returned, and you can store it in a variable.
If the promise is rejected, an error is thrown, which can be handled with try...catch.
 */

async function consumepromiseFive() {
    try {
    const response = await promiseFive
    console.log(response);
    }
    catch(error) {
        console.log(error);   
    }
}
consumepromiseFive()


async function getAllUsers() {
    try {
        const response = await fetch('https://api.github.com/users/Sheryar-bit')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log(error);
    } 
}

getAllUsers()

// Doing the above task using Try Catch

//The fetch function requests data from GitHub's API for the user Sheryar-bit.
fetch('https://api.github.com/users/Sheryar-bit')
.then( function (response) {
    return response.json()
})

//The .then() chains ensure that once the data is received, it is converted to JSON and logged to the console.
.then( function(data) {
    console.log(data);
})

.catch( function(error) {
    console.log(error);
})