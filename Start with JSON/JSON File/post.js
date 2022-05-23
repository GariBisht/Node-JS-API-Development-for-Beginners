//controller 
/*exports.getPosts = (req, res) => {
    res.send("Hello World! from Garima");
};
*/

//JSON code
exports.getPosts = (req, res) => {
    res.json({
        posts:[
            {title:"Garima Bisht"}, {title:"Software Developer"}]
    });
};
