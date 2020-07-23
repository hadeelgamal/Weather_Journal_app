/* Global Variables */

// Create API key
let weatherApiBase = 'https://api.openweathermap.org/data/2.5/weather?';
let apiKey = '&appid=161e1b851a819821e5bc1b43cef53eb5';	
let baseURL = 'http://localhost:8000'


// add event listen to trigger the get request
document.getElementById('generate').addEventListener('click', performAction);
function performAction(e){
const zipCode =  'zip='+document.getElementById('zip').value;
const countryCode = document.getElementById('CC').value;
const userInput = document.getElementById('feelings').value;
getData(zipCode, countryCode)
  .then(data => postData(baseURL+'/datapost', data, userInput))
  	.then (
	updateUI()
  		)
}

async function getData(zipCode , countryCode) 
{
  let response = await fetch(weatherApiBase+zipCode+','+countryCode+apiKey);
  let data = await response.json();
  // let parseData = await JSON.parse(data);
  return data;
}

// first post route
const postData = async ( url = 'http://localhost:8000/datapost', projectData = {}, input)=>{
	let extractedData = {}

extractedData['temp'] = projectData.main.temp;
extractedData['temp_feel'] = projectData.main.feels_like;
extractedData['date'] = projectData.dt;
console.log(extractedData);
console.log(projectData);
    // console.log(projectData);
      const response = await fetch(url, {
      method: 'POST', 
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(extractedData), 
    });

      try {
        const newData = await response.json();
        console.log(newData);
        return newData;
      }catch(error) {
      console.log("error", error);
      }
  }

// async function that uses GET 
const getUserData = async ( )=>{
  const request = await fetch('/dataget');
  try {
  // Transform into JSON
  const request = await request.json();
  console.log(request)
  return request;

  }
  catch(error) {
    console.log("error", error);
  }
}

  const updateUI = async () => {
	const request = await fetch ('http://localhost:8000/dataget');
	try {
		const extractedData = await request.json();
		document.getElementById('temp').innerHTML = extractedData['temp'];
		document.getElementById('date').innerHTML = extractedData['date'];
		document.getElementById('temp_feel').innerHTML = extractedData['temp_feel'];
    console.log(extractedData);
	}
	  catch(error) {
    console.log("error", error);
  }
}

