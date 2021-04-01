// Declared Variables
var manager;
var engineer = [];
var intern = [];

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

// Generates HTML and Manager Card
function generateHTMLmanager(manager) {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Development Team</title>
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css">
        <link rel="stylesheet" href="styles.css">
    </head>
    
    
    <body>
        <header id="jumbotron-banner">
            <h1 class="title has-text-grey">Development Team Tree</h1>
        </header>
    
        <div class = 'managerContainer columns is-centered'>
            <div class="card column is-one-fifth info">
                <header class="card-header">
                ${manager.getRole()} - ${manager.name}
                </header>
                <div class="card-content">
                    <div class="content">
                        <p>ID:${manager.id}</p>
                        <p>Email: <a href = "mailto:${manager.email}">${manager.email}</a></p>
                        <p>Office Number:${manager.number}</p>
                    </div>
                </div>
            </div>
        </div>`
        ;}

 //generates HTML for engineer card 
function generateHTMLengineer(engineer) {
    return `<div class = "engineerColumns columns is-centered">
    <div class="card column is-one-fifth info">
    <header class="card-header">
    ${engineer.getRole()} - ${engineer.name}
    </header>
    <div class="card-content">
        <div class="content">
        <p>ID: ${engineer.id}</p>
        <p>Email: <a href = "mailto:${engineer.email}">${engineer.email}</a></p>
        <p>Github: <a href ="https://www.github.com/${engineer.github}">${engineer.github}</a></p>
    </div>
</div>
</div>
</div>`
};

// Generates HTML for intern card
function generateHTMLintern(intern) {
    return `<div class = "internColumns columns is-centered">
        <div class="card column is-one-fifth profile">
        <header class="card-header">
        ${intern.getRole()} - ${intern.name}
        </header>
        <div class="card-content">
            <div class="content">
            <p>ID: ${intern.id}</p>
            <p>Email: <a href = "mailto:${intern.email}">${intern.email}</a></p>
            <p>School : ${intern.school}</p>
        </div>
    </div>
    </div>
    </div>`   
};

// Generates rest of HTML
function generateHTMLfooter() {
    return `</main>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous"></script>
    </script>
    <script src="index.js"></script>
</body>

</html>`
}

// Handles logic for adding engineers or interns or generated HTML
async function handleProgression(answer) {
    if (answer === "Add an Engineer team member") {
        addEngineer()
            .then(function (answer) {
                let engineer = new Engineer(answer.name, answer.id, answer.email, answer.github)
                engineer.push(engineer)
                handleProgression(answer.nextoptions)
            })
    } else if (answer === "Add an Intern team member") {
        addIntern()
            .then(function (answer) {
                let intern = new Intern(answer.name, answer.id, answer.email, answer.school)
                intern.push(intern)
                handleProgression(answer.progress);
            })
    } else {
        const managerHTML = generateHTMLmanager(manager)
        await appendFileAsync("generatedteam.html", managerHTML)
        const engineerHTML = generateHTMLengineer(engineer)
        await appendFileAsync("generatedteam.html", engineerHTML)
        const internHTML = generateHTMLintern(intern)
        await appendFileAsync("generatedteam.html", internHTML)
        const footerHTML = generateHTMLfooter()
        await appendFileAsync("generatedteam.html", footerHTML)
    }
}

async function init() {
    addManager()
        .then(function (answers) {
            manager = new Manager(answers.name, answers.id, answers.email, answers.number)
            handleProgression(answers.progress)
        })
        .catch(function (err) {
            console.log(err);
        })
}


init();