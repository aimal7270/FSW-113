var students = [
    {name:"John", city:"San Fransico"},
    {name:"Peter", city:"London"},
    {name:"Matthew", city:"Manchester"},
    {name:"Jane", city:"Phoenix"}
];

students.forEach(item => console.log(item));
//req. 1
var students2 =[
    {name:"John", city:"San Fransico", state:"California", dateOfBirth:"08/08/02", payRate:"$10hr"},
    {name:"Peter", city:"London", state:"England", dateOfBirth:"12/15/93", payRate:"$22hr"},
    {name:"Matthew", city:"Manchester", state:"England", dateOfBirth:"03/22/84", payRate:"$6hr"},
    {name:"Jane", city:"Phoenix", state:"Arizonia", dateOfBirth:"06/30/67", payRate:"$13hr"}
]
//req 2
students2.forEach(item => console.log(item));

const gradStudents = [
    {name:"John", city:"San Fransico"},
    {name:"Peter", city:"London"},
    {name:"Matthew", city:"Manchester"},
    {name:"Jane", city:"Phoenix"}
];

gradStudents.forEach(item => console.log(item));
//req. 3
const gradStudents2 =[
    {name:"John", city:"San Fransico", state:"California", dateOfBirth:"08/08/02", payRate:"$10hr"},
    {name:"Peter", city:"London", state:"England", dateOfBirth:"12/15/93", payRate:"$22hr"},
    {name:"Matthew", city:"Manchester", state:"England", dateOfBirth:"03/22/84", payRate:"$6hr"},
    {name:"Jane", city:"Phoenix", state:"Arizonia", dateOfBirth:"06/30/67", payRate:"$13hr"}
]
gradStudents2.forEach(item => console.log(item));

//Req. 4 .

const multipliers = [1,2,3,4,5,6,7,8,9,10,11,12]
const multiplican = [1,2,3,4]
const tableStart = 1
const tableEnd = 12
const table = []

var result = 'x ';
for (var i = 0; i < 13; i++) {

    for (var j = 0; j < 13; j++) {

        if(i == 0 && j > 0){
          result += '[' + j + ']';
        } 
        else if(j == 0 && i>0){
          result += '[' + i + '] ';
        } 
        else if(i>0 && j>0){
        result += (i*j) + ' ';
        }
    }
    result += '\n'
}

console.log(result);


/*table = [
    {name:"1", values:[
        {1:"1x1=1"},
        {2:"1x2=2"},
        {3:"1x3=3"},
        {4:"1x4=4"},
        {5:"1x5=5"},
        {6:"1x6=6"},
        {7:"1x7=7"},
        {8:"1x8=8"},
        {9:"1x9=9"},
        {10:"1x10=10"},
        {11:"1x11=11"},
        {12:"1x12=12"},
    ]
},
{name:"2", values:[
    {1:"2x1=2"},
    {2:"2x2=4"},
    {3:"2x3=6"},
    {4:"2x4=8"},
    {5:"2x5=10"},
    {6:"2x6=12"},
    {7:"2x7=14"},
    {8:"2x8=16"},
    {9:"2x9=18"},
    {10:"2x10=20"},
    {11:"2x11=22"},
    {12:"2x12=24"},
]
},
{name:"3", values:[
    {1:"3x1=3"},
    {2:"3x2=6"},
    {3:"3x3=9"},
    {4:"3x4=12"},
    {5:"3x5=15"},
    {6:"3x6=18"},
    {7:"3x7=24"},
    {8:"3x8=24"},
    {9:"3x9=27"},
    {10:"3x10=30"},
    {11:"3x11=33"},
    {12:"3x12=36"},
]
},
]
table.forEach(item => console.log(item));*/