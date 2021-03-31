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

