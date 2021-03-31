// Declared Variables
var manager;
var engineers = [];
var interns = [];

// Declared Const
const inquirer = require('inquirer');
const fs = require("fs");
const util = require("util");
const appendFileAsync = util.promisify(fs.appendFile);
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

// Function to addManager
function addManager() {
    return inquirer.prompt([{
            type: "input",
            name: "name",
            message: "What is the name of the manager?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the Managers ID"
        },
        {
            type: "input",
            name: "email",
            message: "What is the Managers email address?"
        },
        {
            type: "input",
            name: "office number",
            message: "What is the Managers office number"
        },
        {
            type: "list",
            name: "next options",
            message: "What do you want to do next?",
            choices: [
                "Add an Engineer team member",
                "Add an Intern team member",
                "No more members to add"
            ]
        }
    ])
}

// Function to add Engineer
function addEngineer() {
    return inquirer.prompt([{
            type: "input",
            name: "name",
            message: "What is the Engineers name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the Engineers ID?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the Engineers email address?"
        },
        {
            type: "input",
            name: "github",
            message: "What is the Engineers Github username?"
        },
        {
            type: "list",
            name: "next options",
            message: "What do you want to do next?",
            choices: [
                "Add an Engineer team member",
                "Add an Intern team member",
                "No more members to add"
            ]
        }
    ])
}

// Function to add an Intern
function addIntern() {
    return inquirer.prompt([{
            type: "input",
            name: "name",
            message: "What is the Interns name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the Interns ID?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the Interns email address?"
        },
        {
            type: "input",
            name: "school",
            message: "What school did the Intern attend?"
        },
        {
            type: "list",
            name: "progress",
            message: "What do you want to do next?",
            choices: [
                "Add an Engineer team member",
                "Add an Intern team member",
                "No more members to add"
            ]
        }
    ])
}