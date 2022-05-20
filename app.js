// we are importing using require ,require is used to load module its available only in node js not in browser
// for single exports
/*const helpers = require("./helpers");
const total = helpers.sum(10,200);
console.log("Total:",total);*/

// in object destructing we use object in place of helpers
// Destuctor multiple exports
/*const {sum , add} = require("./helpers");
const Sum = sum(10,200);
const Add = add(400,200);
console.log("Total:",Sum);
console.log("Total:",Add);*/


//Creating A Server with http module in node js
// Built in Module - http (for real world application) this is core module in node js
/*const http = require('http');
// http module comes with create server & its have two argument req and res
const server = http.createServer((req,res) => {
// we give some response
res.end("Hello Garima Are you fine! ,Thanks You");

});

server.listen(3000);*/



// Print in terminal
//console.log("Welcome Garima");

//shows the process & methods in terminal of node js
//console.log("Process: " ,process);
// export is private to each module so the therefore exports is empty


// Using third party module npm
// nodemode 

// express 
//Create server using express
//at first create variable which required express
const express = require('express')
// execute the express and it is ready to listen the incomming request
const app = express()
//accessed all the properties and methods of express package
// get method listen the req comming from browser to server
// it take two argument first for url , second for call back function
// based on request response takes place
app.get('/',(req,res) => {
        res.send("Hey,Whats up from express")
})

app.listen(3000);
