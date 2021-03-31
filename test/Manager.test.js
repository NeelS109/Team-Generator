const Manager = require("../lib/Manager.js");

describe("Manager", () => {
    describe('Initialization', () => {
        it("should initialize name, id, email, and number", () => {
            // Arrange
            let testName = "Michael";
            let testId = "2"
            let testEmail = "worldsbestboss@gmail.com"
            let testNumber = "1"
            // Act
            const testManager = new Manager(testName, testId, testEmail, testNumber);

            // Assert
            expect (testManager.name).toBe(testName);
            expect(testManager.id).toBe(testId);
            expect(testManager.email).toBe(testEmail);
            expect(testManager.number).toBe(testNumber);
        });
    })
    describe('get Role', () => {
        it("should return the role", () => {
            // Arrange
            let testRole = "Manager"
            
            // Act
            const testManager = new Manager();

            // 
            expect (testManager.getRole()).toBe(testRole);
        });
    })
    describe('get Name', () => {
        it("should return the managers name", () => {
            // Arrange
            let testName = "The Managers name is Michael"
            
            // Act
            const testManager = new Manager("Michael", 2, "worldsbestboss@gmail.com", 1);

            // Assert
            expect (testManager.getName()).toBe(testName);
        });
    })
    describe('get id', () => {
        it("should return the Managers ID", () => {
            // Arrange
            let testId = "The Managers ID is 2"
            
            // Act
            const testManager = new Manager("Michael", 2, "worldsbestboss@gmail.com", 1);

            // Assert
            expect (testManager.getId()).toBe(testId);
        });
    })
    describe('get email', () => {
        it("should return the managers email", () => {
            // Arrange
            let testEmail = "The Managers Email is worldsbestboss@gmail.com"
            
            // Act
            const testManager = new Manager("Michael", 2, "worldsbestboss@gmail.com", 1);

            // Assert
            expect (testManager.getEmail()).toBe(testEmail);
        });
    })
    describe('get number', () => {
        it("should return the managers number", () => {
            // Arrange
            let testNumber = "The Managers number is 1"
            
            // Act
            const testManager = new Manager("Michael", 2, "worldsbestboss@gmail.com", 1);

            // Assert
            expect (testManager.getNumber()).toBe(testNumber);
        });
    })
})