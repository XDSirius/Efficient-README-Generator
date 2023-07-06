// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = ["what did you create?","What is the name of your project?", "What languages did you use?","What was the goal?","Is there any installition required?","What is the link to the gihub pages?","How do you use this program/website?","List your credits","What Licenses do you have?"];

const generateReadMe = ({creation,project,languages,goal,installation,link,usage,credits,licenses}) =>
`# ${project}
${creation} .We used ${languages} to completete this project. Our ${goal}.
## Installation
${installation}
## Usage
${usage}
${link}
## Credits
${credits}
## Licenses
${licenses}
`;
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
                name : "project",
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
function writeToFile(generateReadMe, answers) {
    .then((answers) => {
        const readMeContent = generateReadMe(answers);
        fs.writeFile('readme.html' , readMeContent, (err) =>
        err ? console.log(err) : console.log("Successfully created readme.html!")
        );
    });
};


// TODO: Create a function to initialize app
const init = () => {
    promptUser()
}

// Function call to initialize app
init();
