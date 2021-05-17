import {default as Person} from "./Person8"
class Student extends Person{
    constructor(name){
        super(name)
        console.log("Student Class constructor")
    }
}
export default Student