const Employee = require("../lib/Employee")

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getName() {
        return (`The Interns name is ${this.name}`);
    }
    getId() {
        return (`The Interns ID is ${this.id}`);
    }
    getEmail() {
        return (`The Interns Email is ${this.email}`);
    }
    getSchool() {
        return (`The Interns school is ${this.school}`)
    }
    getRole() {
        return "Intern"
    }
}

module.exports = Intern;