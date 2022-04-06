// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Enter Project Name:',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Provide a description for your project:',
        name: 'desc',
    },
    {
        type: 'input',
        message: 'Provide installation instructions:',
        name: 'install',
    },
    {
        type: 'input',
        message: 'Provide instructions to use the application:',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Provide instructions for contributing to this repository:',
        name: 'contrib',
    },
    {
        type: 'input',
        message: 'Provide a command for running tests:',
        name: 'tests',
    },
    {
        type: 'list',
        message: 'Choose the license you want to use:',
        name: 'license',
        choices: ['MIT','ISC','Apache License 2.0']
    },
    {
        type: 'input',
        message: 'Enter your GitHub username:',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Enter your email address:',
        name: 'email',
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
