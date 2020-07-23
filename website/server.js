// Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
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
app.use(express.static('.'));


// Setup Server
const port = 8000;

const server = app.listen(port, listening);

// test that the server is running using call back function (console.log)
function listening() {
	console.log("server running");
	console.log('running on localhost: $(port)');
}

let projectData = {};
// // POST method route
app.post('/datapost', datapost);
function datapost (req, res){
// projectData.push(req.body);
    // let projectData = req.body;
    var data = req.body
// Create new entry for JS Object Endpoint
 projectData['temp'] = data.temp;
 projectData['temp_feel'] = data.temp_feel;
 projectData['date'] = data.date;

    console.log('post',projectData);
};

// // Add a GET route
app.get('/dataget', sendData);
function sendData (request, response) {
	console.log(projectData);
  	response.send(projectData); 
}; 


app.get('/', function(req, res) {
    res.sendFile('./index.html');
});

