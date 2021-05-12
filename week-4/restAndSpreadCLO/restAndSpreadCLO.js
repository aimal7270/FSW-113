//CLO1
/*let studentGrades = [90,80,88,98]
var result = ...studentGrades
//a      Unexpected token '...'
//console.log(result)
//b     SyntaxError: Unexpected token '...'
console.log(result instanceof studentGrades) */


//CLO2
/*let myGrade = 99
var result = ...myGrade
//a             SyntaxError: Unexpected token '...'
console.log(result) */

//CLO3
/*let studentGrades = [90,80,88,98]
var maxGrade = Math.max(...studentGrades)
//a     SyntaxError: Unexpected token '...'
console.log(maxGrade) */


//CLO4
/*let studentGrades = [90,80,88,98]
var gradeArray = [...studentGrades]
//a             [ 90, 80, 88, 98 ]
console.log(gradeArray) */

//CLO4 ....#2
/*let studentGrades = [...[,,]]
//a         [ undefined, undefined ]
console.log(studentGrades) */


//CLO4.....#3
/*let myhouseNumber = [..."8976"]
//a         NaN
console.log(Math.max(myhouseNumber)) */


//CLO5
/*let myhouseNumber = [..."8976", "AB", "CDEF"]
//a         NaN
console.log(Math.max(myhouseNumber))*/

//CLO7
/*var studentName ="James Moore"
var dob = "02/02/2002"
var studentInfo={
    [studentName]:studentName,
    [dob]:dob
}
//a             { 'James Moore': 'James Moore', '02/02/2002': '02/02/2002' }
console.log(studentInfo)*/

//CLO7.....number 2
/*var studentName ="James Moore"
var dob = "02/02/2002"
var studentInfo={
    studentName,
    dob
}
//a         { studentName: 'James Moore', dob: '02/02/2002' }
console.log(studentInfo) */

//CLO8
/*var studentName ="James Moore"
var dob = "02/02/2002"
var studentInfo={
    studentName,
    dob,
    currentAge(){
        var today = new Date()
        var dobDate = new Date(this.dob)
        var timeDiff = today.getTime() -  dobDate.getTime()
        var days = timeDiff/(1000*3600*24*265)
        return Math.round(days)
    }
}
var result = studentInfo.currentAge()
//a     
/* {
  studentName: 'James Moore',
  dob: '02/02/2002',
  currentAge: [Function: currentAge]
} *
console.log(studentInfo) */


//CLO9
/*var studentName ="James Moore"
var dob = "02/02/2002"
var studentInfo={
    studentName,
    dob,
    age: function(){
        var today = new Date()
        var dobDate = new Date(this.dob)
        var timeDiff = today.getTime() -  dobDate.getTime()
        var days = timeDiff/(1000*3600*24*265)
        return Math.round(days)
    }
}
var result = studentInfo.age()
//a     { studentName: 'James Moore', dob: '02/02/2002', age: [Function: age] }
console.log(studentInfo) */


//CLO10
/*var studentName ="James Moore"
var dob = "02/02/2002"
var studentInfo={
    studentName,
    dob,
    ["ageOfStudent"]: function(){
        var today = new Date()
        var dobDate = new Date(this.dob)
        var timeDiff = today.getTime() - dobDate.getTime()
        var days = timeDiff/(1000*3600*24*265)
        return Math.round(days)
    }
}
var result = studentInfo.ageOfStudent
//a         SyntaxError: Unexpected token '['            studentName: 'James Moore',
 // dob: '02/02/2002',
  //ageOfStudent: [Function: ageOfStudent]
console.log(studentInfo) */



//CLO11
var columnName = "Name";
var name ={};
var student = {
    get [columnName](){
        return name;
    },
    set [columnName](value){
        name = value;
    },
};
student.Name ="Harry Potter"

//a         Harry Potter
console.log(student.Name)