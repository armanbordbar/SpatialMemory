// Create express app
require('dotenv').config();
const express = require("express");
const app = express();
const path = require('path');


// MD Router
var MDL2_router_path = path.join(__dirname + '/LEVEL2/MDL2_config.js');
var MDL2_router = require(MDL2_router_path);
console.log(MDL2_router_path)

app.use('/LEVEL2', MDL2_router);
app.use(express.json({ limit: '10mb'}));

const HTTP_PORT = process.env.HTTP_PORT || 3000;

// Start server
app.listen(HTTP_PORT, err => {
  if (err) {
    return console.log("ERROR", err)
  }
  console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT))
});


// Root endpoint
app.get("/", (req, res) => {
  res.json({"message":"Ok"})
});


// Default response for any other request
app.use(function(req, res){
  res.status(404);
});