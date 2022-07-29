import Employee from "./Employee.js"

class Manager extends Employee{
    constructor(){
        super();
        this.office = "909";
    }

    loadInformation(answers){
        super.loadInformation(answers);        
        this.office = answers.office;
    }

    getRole(){
        return "Manager";
    }
}

export default Manager;