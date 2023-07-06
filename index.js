// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs').promises;
// TODO: Create an array of questions for user input
const questions = ["what did you create?","What is the name of your project?", "What languages did you use?","What was the goal?","Is there any installition required?","What is the link to the gihub pages?","How do you use this program/website?","List your credits","What Licenses do you have?"];

const promptUser = () =>{
    inquirer
        .prompt([
            {
                type: 'input',
                name : "creation",
                message: questions[0],
            },
            {
                type: 'input',
                name : "name",
                message: questions[1],
            },
            {
                type: 'input',
                name : "languages",
                message: questions[2],
            },
            {
                type: 'input',
                name : "goal",
                message: questions[3],
            },
            {
                type: 'input',
                name : "installation",
                message: questions[4],
            },
            {
                type: 'input',
                name : "link",
                message: questions[5],
            },
            {
                type: 'input',
                name : "usage",
                message: questions[6],
            },
            {
                type: 'input',
                name : "credits",
                message: questions[7],
            },
            {
                type: 'input',
                name : "licenses",
                message: questions[8],
            },
            

        ]);
    };

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const init = () => {
    promptUser()
    .then((answers) => writeFile('readme.html',generateReadMe(answers)))
    .then (()=> console.log("Successfully wrote to README"))
    .CATCH((err)=> console.error(err));
}

// Function call to initialize app
init();
