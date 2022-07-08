// this tests the intern class to see if it is working properly
const Intern = require("../library/Intern")

describe("Intern class", () => {
    describe("initilization", () => {
        it("Should include a name, id, email, and a school", () => {
            const intern = new Intern("Brandon", 12, "brandonelliott0594@gmail.com", "University of Denver")
            expect(intern.name).toEqual("Brandon")
            expect(intern.id).toEqual(12)
            expect(intern.email).toEqual("brandonelliott0594@gmail.com")
            // the school test which is unique to the intern class
            expect(intern.school).toEqual("University of Denver")
        })
    })
})