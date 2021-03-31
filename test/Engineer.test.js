const Engineer = require("../lib/Engineer.js");

describe("Engineer", () => {
    describe('Initialization', () => {
        it("should initialize name, id, email, id, and github account", () => {
            // Arrange
            let testName = "Jim";
            let testId = 10
            let testEmail = "bigtuna@gmail.com"
            let testGithub = "githubjim"
            // Act
            const testEngineer = new Engineer(testName, testId, testEmail, testGithub);

            // Assert
            expect (testEngineer.name).toBe(testName);
            expect(testEngineer.id).toBe(testId);
            expect(testEngineer.email).toBe(testEmail);
            expect(testEngineer.github).toBe(testGithub);
        });
    })
    describe('Get Role', () => {
        it("Should return the role", () => {
            // Arrange
            let testRole = "Engineer"
            
            // Act
            const testEngineer = new Engineer("Jim", 7, "bigtuna@gmail.com", "githubjim");

            // 
            expect (testEngineer.getRole()).toBe(testRole);
        });
    })
    describe('get Name', () => {
        it("Should return the Engineers Name", () => {
            // Arrange
            let testName = "The Engineers name is Jim"
            
            // Act
            const testEngineer = new Engineer("Jim", 7, "bigtuna@gmail.com", "githubjim");

            // Assert
            expect (testEngineer.getName()).toBe(testName);
        });
    })
    describe('get id', () => {
        it("Should return the Engineers ID", () => {
            // Arrange
            let testId = "The Engineers ID is 7"
            
            // Act
            const testEngineer = new Engineer("Jim", 7, "bigtuna@gmail.com", "githubjim");

            // Assert
            expect (testEngineer.getId()).toBe(testId);
        });
    })
    describe('get email', () => {
        it("should return the Engineers Email", () => {
            // Arrange
            let testEmail = "The Engineers Email is bigtuna@gmail.com"
            
            // Act
            const testEngineer = new Engineer("Jim", 7, "bigtuna@gmail.com", "githubjim");

            // Assert
            expect (testEngineer.getEmail()).toBe(testEmail);
        });
    })
    describe('get github', () => {
        it("should return the Engineers github name", () => {
            // Arrange
            let testGithub = "The Engineers github name is githubjim"
            
            // Act
            const testEngineer = new Engineer("Jim", 7, "bigtuna@gmail.com", "githubjim");

            // Assert
            expect (testEngineer.getGithub()).toBe(testGithub);
        });
    })
})