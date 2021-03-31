const Intern = require("../lib/Intern.js");

describe("Intern", () => {
    describe('Initialization', () => {
        it("should initialize name, id, email, and school", () => {
            // Arrange
            let testName = "Ryan";
            let testId = 1
            let testEmail = "Ryantemp@gmail.com"
            let testSchool = "UConn"

            // Act
            const testIntern = new Intern(testName, testId, testEmail, testSchool);

            // Assert
            expect (testIntern.name).toBe(testName);
            expect(testIntern.id).toBe(testId);
            expect(testIntern.email).toBe(testEmail);
            expect(testIntern.school).toBe(testSchool);
        });
    })
    describe('get Role', () => {
        it("should return the Interns role", () => {
            // Arrange
            let testRole = "Intern"
            
            // Act
            const testIntern = new Intern("Ryan", 1, "ryantemp@gmail.com", "UConn");

            // 
            expect (testIntern.getRole()).toBe(testRole);
        });
    })
    describe('get Name', () => {
        it("should return the Interns Name", () => {
            // Arrange
            let testName = "The Interns name is Ryan"
            
            // Act
            const testIntern = new Intern("Ryan", 1, "ryantemp@gmail.com", "UConn");

            // Assert
            expect (testIntern.getName()).toBe(testName);
        });
    })
    describe('get id', () => {
        it("should return the Inters ID", () => {
            // Arrange
            let testId = "The Interns ID is 1"
            
            // Act
            const testIntern = new Intern("Ryan", 1, "ryantemp@gmail.com", "UConn");

            // Assert
            expect (testIntern.getId()).toBe(testId);
        });
    })
    describe('get email', () => {
        it("should return the Interns email", () => {
            // Arrange
            let testEmail = "The Interns Email is ryantemp@gmail.com"
            
            // Act
            const testIntern = new Intern("Ryan", 1, "ryantemp@gmail.com", "UConn");

            // Assert
            expect (testIntern.getEmail()).toBe(testEmail);
        });
    })
    describe('get School', () => {
        it("should return the Interns School", () => {
            // Arrange
            let testSchool = "The Interns school is UConn"
            
            // Act
            const testIntern = new Intern("Ryan", 1, "ryantemp@gmail.com", "UConn");

            // Assert
            expect (testIntern.getSchool()).toBe(testSchool);
        });
    })
})