// setup our file to use the inquirer package
const inquirer = require ("inquirer");
// imports the File System package for our script
const fs = require("fs");
// exports iquirer data to correct path
const path = require("path");

// GIVEN a command-line application that accepts user input
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
        choices: ["manager","engineer","intern"],
    }

])

// writeFileSync as a promise
const init = () => {
    promptUser()
    .then((answers) => fs.writeFileSync('index.html', generateHTML(answers)))
    .then(() => console.log('data'))
    .catch((err) => console.error(err));
};

init();



