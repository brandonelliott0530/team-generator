const Manager = require("../library/Manager")

describe("Manager class", () => {
    describe("Initilization", () => {
        it("should include a name, id, email, and officeNumber", () => {
            const manager = new Manager("Dani", 1234, "dani@gmail.com", 1)
            expect(manager.name).toEqual("Dani")
            expect(manager.id).toEqual(1234)
            expect(manager.email).toEqual("dani@gmail.com")
            expect(manager.officeNumber).toEqual(1)
        })
    })
})