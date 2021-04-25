//CLO1
//var temp = ()=> 104;

//a    THE RESULT IS "FUNCTION"
//console.log(typeof temp);

//b     THE RESULT IS "104"
//console.log(temp());


//CLO2
//var temp = multiplier => 104 * multiplier;
//a     THE RESULT IS "208"
//console.log(temp(2));


//CLO3
//var temp = (multiplier, divider) => 104* multiplier/divider;
//a     THE RESULT IS "52"
//console.log(temp(3,6));


//CLO4
/*var temp = (multiplier,divider) => { //block
    let result = 104* multiplier
    if (result){
        result = 104/divider
    }
    return result
}; */
//a   THE RESULT IS "17.3333333333"
//console.log(temp(3,6));


//CLO5
/*var clickButton = function () {
    console.log(this)
};    */
//a  ORIGINAL RESULT IS SYNTAX ERROR   AS REWRITTEN "<ref *1> Object [global] {"
//console.log(clickButton());


//CLO6
/*var clickButton = function(){
    console.log(this)
}; */
//a     RESULT <ref *1> Object [global]
//clickButton();


//CLO7
/*var clickButton = () =>{
    console.log(this)
}  */
//a   RESULTS {}
//clickButton()


//CLO8
/*var person = {
    name: 'David Smith',
    age: 56,
    details:function(){
        console.log(this)
    }
} */
//a    RESULTS   { name: 'David Smith', age: 56, details: [Function: details] }
//person.details();


//CLO9
/*var person = {
    name: 'David Smith',
    age: 56,
    details: () => {
        console.log(this)
    }
}
//a     RESULTS {}
person.details()
*/

//CLO10
var temp = () =>100
//a ORIGINAL RESULT SYNTAX ERROR    NEW RESULT [Function: temp]
console.log(temp) 