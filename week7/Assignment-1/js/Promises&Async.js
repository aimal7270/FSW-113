for(let i=1; i<=5; i++){
    const getStars = async() => {
        let character;
        let movies2 = [ ];
        let vehicles= [];
        let starships= [];
        try{
            character = await axios.get("https://swapi.dev/api/people/"+[i]);
            let movies1 =  character.data.films;
           
            for(let m=0; m<movies1.length; m++){
                moviesList = await axios.get(movies1[m])
                movies2.push(moviesList.data.title)
            }
            let vehicles1 = character.data.vehicles
            for(let v=0; v<vehicles1.length; v++){
                vehiclesList = await axios.get(vehicles1[v])
                vehicles.push(vehiclesList.data.name)
            }
            let starships1 = character.data.starships
            for(let s=0; s<starships1.length; s++){
                starList = await axios.get(starships1[s])
                starships.push(starList.data.name)
            }
           displayDataToDom(character,movies2,vehicles,starships)
        }
        catch(error){
            console.log(error)
        }
        
    }
    getStars()
    function displayDataToDom(character,movies2,vehicles,starships){
        const title = document.createElement("h1");
        title.textContent = character.data.name;
        document.body.append(title);

        const subTitle1 = document.createElement("h4");
        subTitle1.textContent = "Films";
        document.body.append(subTitle1);


        for(let m=0; m<movies2.length; m++){
        const movies = document.createElement('li');
        movies.textContent = movies2[m];
        document.body.append(movies);
        }

        const subTitle2 = document.createElement("h4");
        subTitle2.textContent = "Vehicles";
        document.body.append(subTitle2);



        if(vehicles.length === 0){
            const no = document.createElement('p');
            no.textContent = "No known Vehicles"
            document.body.append(no)
        }
        else{for(let m=0; m<vehicles.length; m++){
            const cars = document.createElement('li');
            cars.textContent = vehicles[m];
            document.body.append(cars);
            }}
        
        const subTitle3 = document.createElement("h4");
        subTitle3.textContent = "Starships";
        document.body.append(subTitle3);

        if(starships.length === 0){
            const no = document.createElement('p');
            no.textContent = "No known Starships"
            document.body.append(no)
        }
        else{for(let m=0; m<starships.length; m++){
            const ships = document.createElement('li');
            ships.textContent = starships[m];
            document.body.append(ships);
            }}
    }
    
}