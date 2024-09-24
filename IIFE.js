//Immediate Invoked Function Expressions (IIFE)


(function Tea(){
    console.log(`Tea is ready: `);
})();

//IIFE is used to encapsulate the code and prevent it from polluting the global scope.
( (name) => {
    console.log(`hola again ${name}`);
    
}) ('sheryar')