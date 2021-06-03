var printData = function(data){
    return function (){
    var sentence = data.toLowerCase().split(" ");
    for(var i=0; i< sentence.length; i++){
        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    return sentence.join(" ");
}}
//const print = printData("Hi there HOW ARE you")
//console.log(print())

const print = printData
const output = print("Hi there HOW ARE yOU")
const result = output()
console.log(result)