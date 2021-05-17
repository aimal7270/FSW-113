import {default as Person} from "./Person9"
class Student extends Person{
    constructor(name){
        super(name)
        console.log("Student Class constructor")
    }
    hello(){
        console.log("Hi I am a student a specialized person")
        super.hello()
    }
}
export default Student