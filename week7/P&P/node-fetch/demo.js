const fetch = require('node-fetch')

const URL = 'https://swapi.dev/api'
const peopleEP = `${URL}/people`
let peopleData = [ ]
const getData = async function(id){
    const idEndPoint = `${peopleEP}/${id}`
    const response = await fetch(idEndPoint)
    const data = await response.json() 
    peopleData = await {...peopleData, [id]:data}
}
var ids = [2,3,4,6,10,20,30,300]
var result = []
ids.forEach(id => {
    result.push(getData(id))
})

var output = Promise.all(result).then(response =>{
    console.log(peopleData);
}) .catch(error =>{
    console.log(error)
})

