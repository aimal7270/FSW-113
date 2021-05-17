import {default as starwars_data} from "./fileA"


const items = starwars_data.length;


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

    document.body.append(final)
}