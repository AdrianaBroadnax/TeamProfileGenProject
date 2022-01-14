// setup our file to use the inquirer package
const inquirer = require ("inquirer");
// imports the File System package for our script
const fs = require("fs");
// exports iquirer data to correct path
const path = require("path");
// imports to HTML page
const generateHTML = require("./dist/generate.js")

// first prompt is to add a manager
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// GIVEN a command-line application that accepts user input

//**** PUT IN FUNCTION SO YOU CAN CALL MULTIPLE TIMES */

//add .then

const allEmployees = [];

directory();

function directory() {
    inquirer.prompt([
        {
            type: "list",
            name: "direction",
            message: "who would you like to add",
            choices: [
                {
                    name: "manager",
                    value: "add_manager"
                },
                {
                    name: "engineer",
                    value: "add_engineer"
                },
                {
                    name: "intern",
                    value: "add_intern"
                }

            ]
        }
    ])
        .then(answer => {
            // console.log(answer);
            switch (answer.direction) {
                case "add_manager":
                    addManager();
                    break;
                case "add_engineer":
                    addEngineer();
                    break;
                //FINISH SWITCH CASE FUNCTIONS
                case "add_intern":
                    addIntern();
                    break;
                default:
                    console.error("oops!")
                    // quit();
            }
        })


}


function addManager () {
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is the manager's name?"
        },
        {
            type: "input",
            name: "managerId",
            message: "What is the manager's Id?"
        },
        {
            type: "input",
            name: "managerNumber",
            message: "What is the manager's Office Number?"
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the manager's email?"
        }
    ]).then((answers) => {
        const manager = new Manager(answer.managerName, answer.managerId, answer.managerNumber, answer.managerEmail);
        allEmployees.push(manager);
        //call the next inquirer function
    })
};

function addEngineer () {
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is the engineer's name?"
        },
        {
            type: "input",
            name: "engineerId",
            message: "What is the engineer's Id?"
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is the engineer's email?"
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "What is the engineer's github?"
        }
    ]).then((answers) => {
        const engineer = new Engineer(answer.engineerName, answer.engineerId, answer.engineerEmail, answer.engineerGithub);
        allEmployees.push(engineer);
        //call the next inquirer function
    })
};
// function addIntern

function addIntern () {
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is the intern's name?"
        },
        {
            type: "input",
            name: "internId",
            message: "What is the intern's Id?"
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is the intern's email?"
        },
        {
            type: "input",
            name: "internSchool",
            message: "What school does the intern attend"
        }
    ]).then((answers) => {
        const intern = new Intern(answer.internName, answer.internId, answer.internEmail, answer.internSchool);
        allEmployees.push(intern);
        //call the next inquirer function
    })
};

// writeFileSync as a promise
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

function init() {
    inquirer.prompt(directory).then((data)=>{
        writeToFile('generate.js', generateHTML({...data}))
    })
}

init();