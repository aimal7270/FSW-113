const fetch = require("node-fetch");
const starWarApi = "https://swapi.dev/api"

const starWarCitizenURL = `${starWarApi}/people/1`

fetch(starWarCitizenURL, {
    method: 'GET',
    headers: {
        'Content-Type': "application/json",
    }
})
.then(response => response.json())
.then(data => {
    console.log('Success', data);
})
.catch(error => {
    console.log('Error:', error);
});