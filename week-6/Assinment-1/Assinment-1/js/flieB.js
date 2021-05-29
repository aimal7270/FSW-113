import {default as starwars_data} from "./fileA"

const items = starwars_data.length;

for(let i=0; i<items; i++){
   var getName = function(names1){
        console.log(names1)
        return function(names2) {
            console.log(starwars_data[i].name)
             names2 = starwars_data[i].name
        }
    }
    var getHeight = function(heights){
        return function() {
            return heights = starwars_data[i].height
        }
    }
    var getMovies = function(films){
        return function() {
            films = starwars_data[i].movies
        }
    } 
     resultList = document.getElementById("display")
    console.log(resultList)
    resultList.textContent =+ "hello"
    let displayIt = document.createElement("h4")
    displayIt.textContent = starwars_data[i].name + " is " + starwars_data[i].height + " tall and was in these movies " + starwars_data[i].movies;
    document.querySelector(".container").appendChild(displayIt)
}

for(i=0; i<items; i++){
    const final = document.createElement("ul");
    var names = document.createElement("li");
    names.textContent = starwars_data[i].name;
    final.appendChild(names);
    var heights = document.createElement("li");
    names.textContent = starwars_data[i].height;
    final.appendChild(heights);
    var movies = document.createElement("li");
    names.textContent = starwars_data[i].movies
    final.appendChild(movies);
    document.body.append(final);
} 

document.querySelector("#resultList");