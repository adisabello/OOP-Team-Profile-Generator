import inquirer from 'inquirer'
import Engineer from "./lib/Engineer.js"
import Manager from "./lib/Manager.js"
import Intern from "./lib/Intern.js"
import fs, { writeFile } from 'fs'

let engineers = []
let interns = []
let manager = new Manager();
let done = false;
let data = await readData("Manager","Enter the office number: ")
manager.loadInformation(data);

async function readData(type, message){
    console.log("Provide "+type+" information")
    let answers = await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the name: "
        },
        {
            type: "input",
            name: "id",
            message: "Enter the id: "
        },
        {
            type: "input",
            name: "email",
            message: "Enter the email: "
        },
        {
            type: "input",
            name: "data",
            message: message
        }
    ])
    return answers;
}

while(!done){
    let answer = await inquirer.prompt([{
        type: "list",
        name: "choice",
        message: "Add team members:",
        choices: ["Add Engineer", "Add Intern", "Done"]
    }]);
    var choice = answer.choice;
    if(choice == "Add Engineer"){
        let eng = new Engineer();
        data = await readData("Engineer", "Enter github name: ")
        eng.loadInformation(data);
        engineers.push(eng);
    }else if(choice == "Add Intern"){
        let intern = new Intern();
        data = await readData("Intern", "Enter the name of the school: ")
        intern.loadInformation(data);
        interns.push(intern);
    }else{
        done = true;
    }

}

function writeToFile() {
    var managerStr = "<p><b>Name: </b>&nbsp;"+manager.getName()+"</p>";
    managerStr += "<p><b>ID: </b>&nbsp;"+manager.getId()+"</p>";
    managerStr += "<p><b>Email: </b>&nbsp;<a href = 'mailto: "+manager.getEmail()+"'>"+manager.getEmail()+"</a></p>";
    
    var engineersStr = "<table><tr><th>ID</th><th>Name</th><th>Email</th><th>Github</th></tr>";
    for(var i = 0; i < engineers.length; i++){
        engineersStr+="<tr><td>"+engineers[i].getId()+"</td><td>"+engineers[i].getName()+"</td><td><a href = 'mailto: "+engineers[i].getEmail()+"'>"+engineers[i].getEmail()+"</a></td><td><a href='https://www.github.com/"+engineers[i].getGithub()+"'>"+engineers[i].getGithub()+"</a></td></tr>";
    }
    engineersStr+="</table>"

    var internsStr = "<table><tr><th>ID</th><th>Name</th><th>Email</th><th>School</th></tr>";
    for(var i = 0; i < interns.length; i++){
        internsStr+="<tr><td>"+interns[i].getId()+"</td><td>"+interns[i].getName()+"</td><td><a href = 'mailto: "+interns[i].getEmail()+"'>"+interns[i].getEmail()+"</a></td><td>"+interns[i].getSchool()+"</td></tr>";
    }
    internsStr+="</table>"

    var writeString = `<!DOCTYPE HTML>
                        <html>
                            <head>
                                <title>Employee Roster</title>
                                <link type='text/css' rel='stylesheet' href='styles.css'/>
                            </head>
                            <body>
                                <header>
                                    <h1>Employee Roster</h1>
                                </header>
                                <div class='container'>
                                    <div class='manager'>
                                        <h2>Manager</h2>
                                        ${managerStr}
                                    </div>
                                    <div class='engineers'>
                                        <h2>Engineers</h2>
                                        ${engineersStr}
                                    </div>
                                    <div class='interns'>
                                        <h2>Interns</h2>
                                        ${internsStr}
                                    </div>
                                </div>
                            </body>
                        </html>`

    fs.writeFileSync("./dist/roster.html", writeString)
    console.log("Done generating Employee roster");
}

writeToFile();
 