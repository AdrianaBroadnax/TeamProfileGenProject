// setup our file to use the inquirer package
const inquirer = require ("inquirer");
// imports the File System package for our script
const fs = require("fs");
// exports iquirer data to correct path
const path = require("path");
// imports to HTML page
const generateHTML = require("./dist/index.html")

// first prompt is to add a manager
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// GIVEN a command-line application that accepts user input

//**** PUT IN FUNCTION SO YOU CAN CALL MULTIPLE TIMES */

//add .then

const allEmployees = [];

function addManager () {
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is the manager's name?"
        }
    ]).then((answers) => {
        const manager = new Manager(answer.managerName, answer.managerId, answer.managerEmail, answer.managerOfficeNumber);
        allEmployees.push(manager);
        //call the next inquirer function
    })
}



// writeFileSync as a promise
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

function init() {
    inquirer.prompt(questions).then((data)=>{
        writeToFile('index.html', generateHTML({...data}))
    })
}

init();



