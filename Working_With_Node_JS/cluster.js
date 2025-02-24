const express = require('express');
const cluster = require('node:cluster');
const os = require('os');




//Tells the number of CPus in your SysTem
 const totalCPUs = os.cpus().length;
 console.log(totalCPUs);


if(cluster.isPrimary) {
    for(let i = 0; i < totalCPUs ; i++) {
        cluster.fork();
    }
}
else{
    const app = express()
    const PORT = 8000

    app.get('/', function(req, res) {
       return res.json({message:'Hello World!'})
    })

    app.listen(PORT, () => 
        console.log(`Server is running on ${PORT}`));
    
}