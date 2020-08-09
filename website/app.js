/* Global Variables */
let d = new Date();
let newDate = `${d.getMonth()} - ${d.getDate()} - ${d.getFullYear()}`;

// Create API key
const weatherApiBase = "https://api.openweathermap.org/data/2.5/weather?";
const apiKey = "&appid=161e1b851a819821e5bc1b43cef53eb5&units=imperial";
const baseURL = "http://localhost:8000";

// add event listen to trigger the get request
document.getElementById("generate").addEventListener("click", performAction);
function performAction(e) {
  const zipCode = "zip=" + document.getElementById("zip").value;
  const userInput = document.getElementById("feelings").value;
  getData(zipCode)
    .then(function(data) {
      postData("/datapost", {
        temperature: data.main.temp,
        date: newDate,
        userContent: userInput,
      });
    })
    .then(function() {
      updateUI();
    });
}

async function getData(zipCode) {
  let response = await fetch(weatherApiBase + zipCode + "," + "us" + apiKey);
  let data = await response.json();
  return data;
}

// first post route
const postData = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  try {
    const newData = await response.json();
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};

// async function that uses GET
const getUserData = async () => {
  const request = await fetch("/dataget");
  try {
    // Transform into JSON
    const response = await request.json();
    console.log(response);
    return response;
  } catch (error) {
    console.log("error", error);
  }
};

const updateUI = async () => {
  const request = await getUserData();
  try {
    const allData = await request
    document.getElementById("temp").innerHTML = allData.temp;
    document.getElementById("date").innerHTML = allData.date;
    document.getElementById("content").innerHTML = allData.feelings;
  } catch (error) {
    console.log("error", error);
  }
};
