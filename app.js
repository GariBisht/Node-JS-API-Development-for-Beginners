// Node js Event Loop
//we take file system fs (nodejs core module)
/*const fs = require('fs') ;
const fileName ="target.txt";
// create a text file in folder
// watch is a method of file system its take two arguments
//fs.watch(fileName, () => console.log('File Changed'));
// its gives inside of nodejs 
// then go to target.txt file and save it . its shows file Changed in terminal every time when we save the file its doesnot stop

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