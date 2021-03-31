const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe('Initialization', () => {
        it("should initialize role, name, id, and email", () => {
            // Arrange
            let testName = "Andy";
            let testId = "7"
            let testEmail = "nard-dog@gmail.com"

            // Act
            const testEmployee = new Employee(testName, testId, testEmail);

            // Assert
            expect (testEmployee.name).toBe(testName);
            expect(testEmployee.id).toBe(testId);
            expect(testEmployee.email).toBe(testEmail);
        });
    })
    describe('get Role', () => {
        it("should return role which is: employee", () => {
            // Arrange
            let testRole = "Employee"
            
            // Act
            const testEmployee = new Employee();

            // Assert
            expect (testEmployee.getRole()).toBe(testRole);
        });
    })
    describe('Get Name', () => {
        it("should return the name of the Employee", () => {
            // Arrange
            let testName = "The Employees name is Andy"
            
            // Act
            const testEmployee = new Employee("Andy", 7, "nard-dog@gmail.com");

            // Assert
            expect (testEmployee.getName()).toBe(testName);
        });
    })
    describe('get id', () => {
        it("Should return the Employees ID", () => {
            // Arrange
            let testId = "The Employees ID is 7"
            
            // Act
            const testEmployee = new Employee("Andy", 7, "nard-dog@gmail.com");

            // Assert
            expect (testEmployee.getId()).toBe(testId);
        });
    })
    describe('get email', () => {
        it("Should return the employees email", () => {
            // Arrange
            let testEmail = "The Employees Email is nard-dog@gmail.com"
            
            // Act
            const testEmployee = new Employee("Andy", 7, "nard-dog@gmail.com");

            // Assert
            expect (testEmployee.getEmail()).toBe(testEmail);
        });
    })
})
