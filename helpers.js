//function for sum
//function sum(a,b){
   // return a + b;
//}
// for using Arror function we comment the below function then run  
//Arrow Function
/*const sum =(a,b) => {
    return a + b;
}; */
// we also use return word in one line which is given below
const sum =(a,b) => a + b;
const add =(a,b) => a + b;
// if only one argument
//const sum = a => a;


// its export the sum function to app.js file
//module.exports = {
  //sum
//};

// one more way to write this by arrow function
exports.sum = (a,b) => a + b;
exports.add = (a,b) => a + b;






//console.log("Process: " ,process);
//we write Process statement in export section for this we dont see empty block in export section

