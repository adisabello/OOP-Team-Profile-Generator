import Employee from "./Employee.js"

class Intern extends Employee{
    constructor(){
        super();
        this.school = "Harvard";
    }

    loadInformation(answers){
        super.loadInformation(answers);
        this.school = answers.school;
    }

    getSchool(){
        return this.school
    }

    getRole(){
        return "Intern";
    }
}

export default Intern;