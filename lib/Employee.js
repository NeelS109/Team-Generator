class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
  
    getName() {
      return (`The Employees name is ${this.name}`);
    }
    getId() {
      return (`The Employees ID is ${this.id}`);
    }
    getEmail() {
      return (`The Employees Email is ${this.email}`);
    }
    getRole() {
      return "Employee"
    }
  }

  module.exports = Employee;