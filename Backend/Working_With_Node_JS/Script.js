const fs = require('fs');

//writeFile
fs.writeFile('hello.txt', 'Hello this is my fist file', function(err) {
    if (err) {
        return console.error(err);
    } else {
        console.log("done");
    }
})