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
  .then(data => postData(baseURL+'/datapost', data))
  	// postData('/datapost')); 

// .then(function(projectData){
// 	console.log(projectData)
// 	postData(localhost + '/datapost');
// });

};
async function getData(zipCode , countryCode) 
{
  let response = await fetch(weatherApiBase+zipCode+','+countryCode+apiKey);
  let data = await response.json();
  // let parseData = await JSON.parse(data);
  return data;
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


// first post route
const postData = async ( url = '/datapost', projectData = {})=>{
    // console.log(projectData);
      const response = await fetch(url, {
      method: 'POST', 
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(projectData), 
    });

      try {
        const newData = await response.json();
        console.log(newData);
        return newData;
      }catch(error) {
      console.log("error", error);
      }
  }
