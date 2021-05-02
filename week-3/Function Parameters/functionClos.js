//CLO1
/*let studentGrades = [90,80,88,98]
let curveGrades = function(grades, percentage){
    var newGrades = grades.map(grade => {
        return grade * percentage
    })
    return newGrades
}
var result = curveGrades(studentGrades) 
// a      result  [ NaN, NaN, NaN, NaN ]
console.log(result) */

//CLO2
/*let studentGrades = [90,80,88,98]
let curveGrades = function(grades, percentage = 1.10){
    var newGrades = grades.map(grade => {
        return grade * percentage
    })
    return newGrades
}
var result = curveGrades(studentGrades)
//a                 [99.00000000000001, 88, 96.80000000000001, 107.80000000000001]
console.log(result)  */

//CLO3     the first one
/*let studentGrades = [90,80,88,98]
let curveGrades = function(grades, percentage = 1.10){
    var newGrades = grades.map(grade => {
        return grade * percentage
    })
    return newGrades
}
var result = curveGrades(studentGrades, 1.33)
//a         [ 119.7, 106.4, 117.04, 130.34 ]
console.log(result) */



//CLO3     the second one
/*let studentGrades = [90,80,88,98]
let curveGrades = function(percentage = 1.10, ...grades){
    var newGrades = grades.map(grade => {
        return grade * percentage
    })
    return newGrades
}
var result = curveGrades(1.33 , ...studentGrades)
//a         SyntaxError: Rest parameter must be last formal parameter
//              when switched to second parameter [ 119.7, 106.4, 117.04, 130.34 ]
console.log(result) */

//CLO4
/*let studentGrades = [90,80,88,98]
let curveGrades = function(percentage = 1.10, ...grades){
    var newGrades = grades.map(grade => {
        return grade * percentage
    })
    return newGrades
}
var result = curveGrades(...studentGrades)
//a             Rest parameter must be last formal parameter
//              when switched.... [ 7200, 7920, 8820 ]
console.log(result) */

//CLO5
/*let studentGrades = [90,80,88,98]
let curveGrades = function(percentage = 1.10, ...grades){
    var newGrades = grades.map(grade => {
        return grade * percentage
    })
    return newGrades
}
var result = curveGrades(1.24, ...studentGrades)
//a             Rest parameter must be last formal parameter
//              when switched.... [ 111.6, 99.2, 109.12, 121.52 ]
console.log(result)   */

//CLO6
/*let studentGrades = [90,80,88,98]
let curveGrades = function( percentage = 1.10, ...grades){
    var newGrades = grades.map(grade => {
        return grade * percentage
    })
    return newGrades
}
var result = curveGrades(undefined, ...studentGrades)
//a             Rest parameter must be last formal parameter
//              when switched.... [ 99.00000000000001, 88, 96.80000000000001, 107.80000000000001 ]
console.log(result) */


//CLO7  the first one...
/*let studentGrades = [90,80,88,98]
let percentageCurve = 0.98
let curveGrades = function( percentage = percentageCurve, ...grades){
    var newGrades = grades.map(grade => {
        return grade * percentage
    })
    return newGrades
}
var result = curveGrades(undefined, ...studentGrades)
//a             Rest parameter must be last formal parameter
//              when switched.... [ 88.2, 78.4, 86.24, 96.03999999999999 ]
console.log(result)  */

//CLO7  the second one...
/*let studentGrades = [90,80,88,98]
const avg= function(array){
    let average = array.reduce((a,b) => a+b,0)
        return average/array.length/100
}
let curveGrades = function( percentage = avg(studentGrades), ...grades){
    var newGrades = grades.map(grade => {
        return grade * percentage
    })
    return newGrades
}
var result = curveGrades(undefined, ...studentGrades)
//a             [ 80.1, 71.2, 78.32000000000001, 87.22 ]
console.log(result)   */

//CLO8
/*let studentGrades = [90,80,88,98]
const avg= function(array){
    let average = array.reduce((a,b) => a+b,0)
        return average/array.length/100
}
let curveGrades = function( percentage = avg(studentGrades), ...grades){
    var newGrades = grades.map(grade => {
        return grade * percentage
    })
    return newGrades
}
var result = curveGrades(1.3, ...studentGrades)
//a             [ 117, 104, 114.4, 127.4 ]
console.log(result)  */

//CLO9
/*let studentGrades = [90,80,88,98]
const avg= function(array){
    let average = array.reduce((a,b) => a+b,0)
        return average/array.length/100
}
let curveGrades = function( percentage = avg(studentGrades), ...grades){
    var newGrades = grades.map(grade => {
        return grade * percentage
    })
    return newGrades
}
var result = curveGrades(1.3, 68,56, ...studentGrades)
//a             [ 88.4, 72.8, 117, 104, 114.4, 127.4 ]
console.log(result)  */

//CLO9   again...
let count = new Function("grades", "...grades.length")

var result = count([90,80,88,98])

//a             SyntaxError: Unexpected token '...'
console.log(result) 