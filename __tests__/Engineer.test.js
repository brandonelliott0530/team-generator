// This tests the engineer class to see if it is working properly. 

const Engineeer = require("../library/Engineer")


describe("Engineer class", () => {
    describe("Initilization", () => {
        it("It should have a name, id, email, github", () => {
            const engineer = new Engineeer("Tina", 1, "tina@gmail.com", "tinathecat")
            
            expect(engineer.name).toEqual("Tina")
            expect(engineer.id).toEqual(1)
            expect(engineer.email).toEqual("tina@gmail.com")
            // test for the github that is unique for the engineer class
            expect(engineer.gitHub).toEqual("tinathecat")
        
        })
    })
})