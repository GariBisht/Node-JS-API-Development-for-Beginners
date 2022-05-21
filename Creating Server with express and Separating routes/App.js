//Creating server with express
const express = require("express");
const App = express();
// require for route
//const morgan = require("morgan");

// bring in routes
const postRoutes = require("./routes/route");

App.get("/", postRoutes.getPosts);
 //   res.send("Hello galaxy!from node js");
//});

const port = 5500;
App.listen(port, () => {
    console.log("A nodejs API is listening");
});
