import Employee from "./Employee.js"

class Engineer extends Employee{
    constructor(){
        super();
        this.github = "testGithub";
    }

    loadInformation(answers){
        super.loadInformation(answers);
        this.github = answers.github;
    }

    getGithub(){
        return this.github;
    }

    getRole(){
        return "Engineer";
    }
}

export default Engineer;