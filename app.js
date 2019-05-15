// BASE SETUP
// ================================================
// Dependencies
try{
  var express = require('express'); // Call express
  var bodyParser = require('body-parser');
  var path = require('path');
}catch(error){
  console.log("ERROR are all the Dependencies installed?");
  console.log(error);
  process.exit(1);
}

// Variables
var port = 3001; // Set our port Default is 80


var cors = require('cors');

// Express
var app = express(); // Define our app using expressnp

app.use(cors());

// Configure app to use bodyParser()
// This will let us get data from a POST
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// ROUTES FOR API
// ===============================================
var apiRouter = require('./routes/api');      // Get an instance of the express router

  // Home Page
  // app.use(express.static('public'));




// REGISTER ROUTES --------------------------

// All api routes will be prefixed with /api
app.use('/api', apiRouter);

// Start Server
var server = app.listen(port);
server.on('connection', function(socket) {
  console.log("A new connection was made by a client.");
  socket.setTimeout(600 * 1000);
  // 30 second timeout. Change this as you see fit.
});
console.log("Server is listening on port " + port)
