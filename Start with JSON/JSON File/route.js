
/* Used for Routes
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

// Code which is Used for Controllers

const express = require('express');
const postController = require('../Controler/post');

const router = express.Router();

router.get("/", postController.getPosts);

module.exports = router;

