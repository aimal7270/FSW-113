//CLO1
//let studentArray = Array(10);

//a   RESULT "10"
//console.log(studentArray.length) 

//b  RESTULT "[ <10 empty items> ]"
//console.log(studentArray)


//CLO2
//let studentArray = Array.of(10)

//a     RESULT "1"
//console.log(studentArray.length)

//b     RESULT "[10]"
//console.log(studentArray)


//CLO3
/*let grades = [90,98,78,99]
let studentGrades = Array.from(grades, g=> g*110);
//a   RESULTS "4"
console.log(studentGrades.length)
//b     RESULTS [ 9900, 10780, 8580, 10890 ]
console.log(studentGrades) */


//CLO4
/*let grades = [90,98,78,99]
let studentGrades = Array.from(grades, function(g){
    return g* this.percentageIncrement
},{percentageIncrement:1.10});
//a     [ 99.00000000000001, 107.80000000000001, 85.80000000000001, 108.9 ]
console.log(studentGrades) */


//CLO5
/*let grades = [90,98,78,99]
let studentGrades = Array.from(grades, g=>{
    return g * this.percentageIncrement
},{percentageIncrement:1.10});
//a   RESULTS [ NaN, NaN, NaN, NaN ]
console.log(studentGrades)  */


//CLO6  
/*let grades = [90,98,78,99]
let studentGrades = grades.find(v=> v==90)
//a     RESULT "90"
console.log(studentGrades) */

//CLO7
/*let grades = [90,98,78,99]
let studentGrades = grades.find(v=> v >= 90)
//a    RESULT "90"
console.log(studentGrades) */


//CLO8
/*let grades = [90,98,78,99]
let studentGrades = grades.map(v => v* .090)
//a     RESULTS [ 8.1, 8.82, 7.02, 8.91 ]
console.log(studentGrades) */


//CLO9
/* let grades = [90,98,78,99]
let studentGrades = ...grades
//a           SYNTAX ERROR
console.log(studentGrades)  */


//CLO10
/*let student = {name:'John Masson'}
let adjunct = {name:'Dave Larson'}
let people = new Map()
people.set(student,"Student")
people.set(adjunct,"Adjunct")
/*a      RESULTS Map(2) {
  { name: 'John Masson' } => 'Student',
  { name: 'Dave Larson' } => 'Adjunct'
}  */
//console.log(people) 


//CLO11
/*let student = {name:'John Masson'}
let adjunct = {name:'Dave Larson'}
let people = new Map()
people.set(student,"Student")
people.set(adjunct,"Adjunct")
people.delete(student)
//a     Map(1) { { name: 'Dave Larson' } => 'Adjunct' }
console.log(people) */


//CLO12
/*let student = {name:'John Masson'}
let adjunct = {name:'Dave Larson'}
let people = new Map()
people.set(student,"Student")
people.set(adjunct,"Adjunct")
people.clear()
//a     Map(0) {}
console.log(people)  */


//CLO13
/*let student = {name:'John Masson'}
let adjunct = {name:'Dave Larson'}
let people = new Map()
people.set(student,"Student")
people.set(adjunct,"Adjunct")
let result = people.has(student);
//a     RESULT "TRUE"
console.log(result) */


//CLO14
/* let student = {name:'John Masson'}
let adjunct = {name:'Dave Larson'}
let people = new Map()
people.set(student,"Student")
people.set(adjunct,"Adjunct")
let result = people.keys(student);
//a     [Map Iterator] { { name: 'John Masson' }, { name: 'Dave Larson' } }
console.log(result)  */


//CLO15
/*let student = {name:'John Masson'}
let adjunct = {name:'Dave Larson'}
let people = new Map()
people.set(student,"Student")
people.set(adjunct,"Adjunct")
let result = people.values(student);
//a         [Map Iterator] { 'Student', 'Adjunct' }
console.log(result) */


//CLO16
/*let student = {name:'John Masson'}
let adjunct = {name:'Dave Larson'}
let people = new WeakMap()
people.set(student,"Student")
people.set(adjunct,"Adjunct")
let adjunct = null;
//a    SyntaxError: Identifier 'adjunct' has already been declared
console.log(people.size)
//b     SyntaxError: Identifier 'adjunct' has already been declared
console.log(people.size)  */


//CLO17
/*let student = {name:'John Masson'}
let adjunct = {name:'Dave Larson'}
let people = new Set()
people.add(student)
people.add(adjunct)
people.add(adjunct)
//a     RESULT "2"
console.log(people.size) */


//CLO18
let students = [{name:'John Masson'}, {name:'Don Vasco'}, {name:'Mary Landley'}]
let people = new Set(students)

//a was missing a "]" and a ")"   RESULTS "false"
console.log(people.has({name:'Dave Vasco'}))