//Working with NodeJs:
//Reading File
const fs =require('fs');
//reading a file
// const txt = fs.readFileSync('hello.txt', 'utf-8')
fs.readFile('hello.txt', 'utf-8', function(err, txt) {
    console.log(txt)
})


//The this is that that the below function will execute first
//because it atkes some time to read the file.


// function sum(a,b) {
//     return  a + b
// }
// console.log(`the sum is: ${sum(2,2)}`)


// console.log(txt);

/*HTTP:
HTTP (HyperText Transfer Protocol) is a set of rules that allows web browsers and servers to communicate with each other. When you visit a website, your browser sends a request to the server using HTTP, and the server responds by sending back the webpage,
which is displayed in your browser. It's like a conversation between your browser and a website's server, helping you see and interact with webpages.
*/

