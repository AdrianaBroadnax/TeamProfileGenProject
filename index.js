// setup our file to use the inquirer package
const inquirer = require ("inquirer");
// imports the File System package for our script
const fs = require("fs");
// exports iquirer data to correct path
const path = require("path");

// first prompt is to add a manager


// GIVEN a command-line application that accepts user input

//**** PUT IN FUNCTION SO YOU CAN CALL MULTIPLE TIMES */
inquirer.prompt([
    {
        type:"input",
        name:"user",
        message:"Please enter employee name"
    },
    {
        type: "list",
        name: "position",
        message: "what's the employee's position",
        choices: ["engineer","intern","manager", "I'm done adding employees"],
    }

])
//add .then

// writeFileSync as a promise
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

init();



