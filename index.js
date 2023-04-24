// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'github',
    message: 'what is your Github username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'what is your email address?',
  },
  {
    type: 'input',
    name: 'title',
    message: "what is your project's name?",
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please write a short description of your project:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'What kind of lincese should your project have?',
    choices: ['MIT','APACHE 2.0', 'GLP 3.0', 'BSD 3', 'None'],
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What command should be run to install dependecies?',
    default: 'npm i',
  },
  {
    type: 'input',
    name: 'test',
    message: 'what command should be run to run tests?',
    default: 'npm test',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'what does the user need to know about using the repo?',
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'what does the user need to know about contribution to the repo?',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

 }

// TODO: Create a function to initialize app
function init() { 
    inquirer
    .prompt (questions)
    .then (answers => {
      console.log(answers);
      
        fs.writeFile('dist/README.md',generateMarkdown(answers), err =>{ 
            if (err)return console.error(err);
            console.log ('Succes, file is located in the dist folder');
        });
        
    });
}

// Function call to initialize app
init();

