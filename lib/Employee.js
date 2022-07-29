
class Employee{

    constructor(){
        this.name = "Default"
        this.id = "100"
        this.email = "test@gmail.com"
    }

    loadInformation(answers){
        this.name = answers.name;
        this.id = answers.id;
        this.email = answers.email;
    }

    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return "Employee";
    }

}

export default Employee;