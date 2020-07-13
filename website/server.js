// Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();

const projectData = {};
// // POST method route
app.post('/datapost', datapost);
function datapost (req, res){
// projectData.push(req.body);
    let projectData = req.body;
    console.log(req);
};

// app.post ('/newData', newData);
// function newData(){
// 	newEntry = { 
// 		temperature: req.body.temperature
// 		date: req.body.date
// 		userResponse: req.body.userResponse

// 	}
// }


// projectData.push(newEntry)
// res.send(projectData)
// console.log(projectData)
// // Add a GET route
// change hello to projectData after testing
app.get('/dataget', sendData);
function sendData (request, response) {
	console.log(request)
  	response.send(projectData); 
}; 



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

