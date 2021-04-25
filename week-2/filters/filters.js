//Create 10 rows of test data from the sample data.
let cars = [
    {
    "color": "purple",
    "type": "minivan",
    "registration": new Date('2017-01-03'),
    "capacity": 7
    },
    {
    "color": "red",
    "type": "station wagon",
    "registration": new Date('2018-03-03'),
    "capacity": 5
    },
    {
    "color": "green",
    "type": "car",
    "registration": new Date('2008-12-08'),
    "capacity": 5
    },
    {
    "color": "red",
    "type": "SUV",
    "registration": new Date('2006-08-13'),
    "capacity": 5
    },
    {
    "color": "grey",
    "type": "minivan",
    "registration": new Date('2017-01-03'),
    "capacity": 7
    },
    {
    "color": "green",
    "type": "convertable",
    "registration": new Date('1990-03-03'),
    "capacity": 2
    },
    {
    "color": "blue",
    "type": "car",
    "registration": new Date('2021-10-10'),
    "capacity": 4
    },
    {
    "color": "red",
    "type": "station wagon",
    "registration": new Date('2018-03-03'),
    "capacity": 5
    }
  ];


//Create a call back function to filter all cars with color="red".
console.log("STEP 3")
    for (i=0; i< cars.length; i++){
        if (cars[i].color === "red"){
            console.log(cars[i]); 
        }
    }

// Use this call back function to filter all the collections of cars.

//Convert the call back function to use the arrow Functions.
console.log("STEP 4")
const result = cars.filter(car => car.color === "red")
console.log(result)


//Use an inline arrow function to filter the cars by colors ("red" and "green")
console.log("STEP 5")
const results = cars.filter(car => car.color === "red" || car.color === "green")
console.log(results)