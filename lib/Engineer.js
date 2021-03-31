const Employee = require("../lib/Employee")

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getName() {
        return (`The Engineers name is ${this.name}`);
    }
    getId() {
        return (`The Engineers ID is ${this.id}`);
    }
    getEmail() {
        return (`The Engineers Email is ${this.email}`);
    }
    getGithub() {
        return (`The Engineers github name is ${this.github}`)
    }
    getRole() {
        return "Engineer"
    }
}

module.exports = Engineer;