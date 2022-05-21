const res = require("express/lib/response");

// call by function
const getPosts = (req, res) => {
     res.send("Hello world from node js");
};

module.exports = {
     getPosts
};


// another way to right
/*
export.getPosts = (req, res) => {
     res.send("Hello world from nodejs");
};
*/