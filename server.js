// WRONG FILE CHECK WITH tarek

// Require Express to run server and routes
// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();
// Setup empty JS object to act as endpoint for all routes
const projectData = {};

// // Add a GET route
// change hello to projectData after testing
app.get('/dataget', sendData);
function sendData (request, response) {
	console.log(request)
  	response.send("hello"); 
}; 

// // POST method route
app.post('/datapost', function (req, res) {
  res.send('POST received')
})

/* Dependencies */
const bodyParser = require('body-parser')
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
// Qs for tarek Servers-File Structure Hierarchy (server.js doesn't run in terminal)
app.use(express.static('website'));


// Setup Server
const port = 8000;

const server = app.listen(port, listening);

function listening() {
	console.log("server running");
	console.log('running on localhost: $(port)');
	
}


