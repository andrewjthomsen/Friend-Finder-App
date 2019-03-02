// Dependencies
//==================================
var express = require("express");
var bodyParser = require("body-parser");
// path
var path = require('path');
var app = express();

// Sets up the Express app to handle data parsing
//changed to true
// app.use(bodyParser.urlencoded({
//   extended: true
// }));
//commented this out
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
// app.use(bodyParser.json());
//app.use(express.static(__dirname + '/app/public')); 
//routes
//require("./app/routing/apiRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

//port listening
var PORT = process.env.PORT || 8000;
app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});