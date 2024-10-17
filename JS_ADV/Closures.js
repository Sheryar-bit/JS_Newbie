/*
a closure gives a function access to its outer scope. In JavaScript, closures are created every time a function is created, at function creation time.
 */


//LEXICAL SCOPING: 
function init() {
    var name = "Mozilla"; 
    function displayName() {
        console.log(name); 
    }
    displayName();
}
init();


function outer () {
    let UserName = "sheryar";
    function inner() {
        console.log("inner : ", UserName);
        
    }
    inner();
    // we get userName 
}
outer()
console.log(UserName);
// we dont get userName


//CLOSURES
function makeFunc() {
    const name = "Mozilla";
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  
  const myFunc = makeFunc();
  myFunc();
  