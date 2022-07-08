// This tests the manager class to see if it is working properly. 
const Manager = require("../library/Manager")

describe("Manager class", () => {
    describe("Initilization", () => {
        it("should include a name, id, email, and officeNumber", () => {
            const manager = new Manager("Dani", 1234, "dani@gmail.com", 1)
            expect(manager.name).toEqual("Dani")
            expect(manager.id).toEqual(1234)
            expect(manager.email).toEqual("dani@gmail.com")
            //Office number test that is unique to the manager class
            expect(manager.officeNumber).toEqual(1)
        })
    })
})