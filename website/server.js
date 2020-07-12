// Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();

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



/* Middleware*/
/* Dependencies */
const bodyParser = require('body-parser')
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 8000;

const server = app.listen(port, listening);

// test that the server is running using call back function (console.log)
function listening() {
	console.log("server running");
	console.log('running on localhost: $(port)');
}

