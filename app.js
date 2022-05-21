
// we are importing using require ,require is used to load module its available only in node js not in browser
// for single exports
/*const helpers = require("./helpers");
const total = helpers.sum(10,200);
console.log("Total:",total);*/
//------------------------------------------------------------------------------------------
// in object destructing we use object in place of helpers
// Destuctor multiple exports
/*const {sum , add} = require("./helpers");
const Sum = sum(10,200);
const Add = add(400,200);
console.log("Total:",Sum);
console.log("Total:",Add);*/

//-----------------------------------------------------------------------------------------
//Creating A Server with http module in node js
// Built in Module - http (for real world application) this is core module in node js
/*const http = require('http');
// http module comes with create server & its have two argument req and res
const server = http.createServer((req,res) => {
// we give some response
res.end("Hello Garima Are you fine! ,Thanks You");

});

server.listen(3000);*/

//--------------------------------------------------------------------------------------------

// Print in terminal
//console.log("Welcome Garima");

//shows the process & methods in terminal of node js
//console.log("Process: " ,process);
// export is private to each module so the therefore exports is empty in terminal
//--------------------------------------------------------------------------------------------

// Using third party module npm
// nodemode 
/*
//---------------------------------------------------------------------------------------------
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
*/

//-------------------------------------------------------------------------------------------

// Node js Event Loop
//we take file system fs (nodejs core module)
/*const fs = require('fs') ;
const fileName ="target.txt";
// create a text file in folder
// watch is a method of file system its take two arguments
//fs.watch(fileName, () => console.log('File Changed'));
// its gives inside of nodejs 
// then go to target.txt file and save it . its shows file Changed in terminal every time when we save the file its doesnot stop
//----------------------------------------------------------------------------------------------
//Asynchronous Programming
//we use read file method 
// go to the file system read the file and take some time 
fs.readFile(fileName,(err ,data) => {
        if(err) {
                console.log(err);
        }
        console.log(data.toString());
});

console.log("Node js async programming...?");

//reading the file is longer takes place. 
*/

//-----------------------------------------------------------------------------------------
/*
//Synchronous Programming (Blocking Model -also run by php ,ruby)

const fs = require('fs') ;
const fileName ="target.txt";

//Sync Method 
//in this method only one argument is used
const data = fs.readFileSync(fileName)
console.log(data.toString());
//its wait and get the data and print it and then its go to next one.
// in sync at first content of target.txt file readed then its goes to next
console.log("Node js async programming...?");
*/
//---------------------------------------------------------------------------------------------

// Functional Approach
const fs = require('fs');
const fileName ="target.txt" ;
// we create two methods (distribute the functionalities )
const errHandler = err => console.log(err);
const dataHandler = data => console.log(data.toString());


fs.readFile(fileName, (err , data) => {
        if (err) errHandler(err);
         dataHandler(data);
});

console.log("Node js programming...?");