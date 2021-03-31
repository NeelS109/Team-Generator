const Employee = require("../lib/Employee");

class Manager extends Employee {
    constructor(name, id, email, number) {
        super(name, id, email);
        this.number = number;
    }

    getName() {
        return (`The Managers name is ${this.name}`);
    }
    getId() {
        return (`The Managers ID is ${this.id}`);
    }
    getEmail() {
        return (`The Managers Email is ${this.email}`);
    }
    getNumber() {
        return (`The Managers number is ${this.number}`);
    }
    getRole() {
        return "Manager"
    }
}

module.exports = Manager;