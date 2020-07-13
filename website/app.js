/* Global Variables */

// Create API key
let baseURL = 'https://api.openweathermap.org/data/2.5/weather?';
let apiKey = '&appid=161e1b851a819821e5bc1b43cef53eb5';	



document.getElementById('generate').addEventListener('click', performAction);
function performAction(e){
const zipCode =  'zip='+document.getElementById('zip').value;
const countryCode = document.getElementById('CC').value;
getDay(baseURL, zipCode, countryCode, apiKey)

}

// async function that uses GET 
const getDay = async (baseURL, zipCode, countryCode, apiKey) =>{ 
  const request = await fetch(baseURL+zipCode+','+countryCode+apiKey);
  try {
  // Transform into JSON
  const allData = await request.json()
  }
  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
}




// first post route
const postData = async ( url = 'localhost:8000/datapost', data = {})=>{
    console.log(data);
      const response = await fetch(url, {
      method: 'POST', 
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
     // Body data type must match "Content-Type" header        
      body: JSON.stringify(data), 
    });

      try {
        const newData = await response.json();
        console.log(newData);
        return newData;
      }catch(error) {
      console.log("error", error);
      }
  }

const GetData = async ( url = 'localhost:8000/dataget', data = {})=>{
    console.log(data);
      const response = await fetch(url, {
      method: 'GET', 
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
     // Body data type must match "Content-Type" header        
      body: JSON.stringify(data), 
    });

      try {
        const newData = await response.json();
        console.log(newData);
        return newData;
      }catch(error) {
      console.log("error", error);
      }
  }

  // Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

