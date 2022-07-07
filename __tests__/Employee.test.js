const Employee = require ('../library/Employee')
const  getName = require ('../library/Intern')


describe('Employee class', () => {
    describe("Initilization", () => {
        it("should include a name, id, email, a getName() method, a getEmail() method, and a getRole() method", () => {
            const employee = new Employee("Dani", 2, "dani@gmail.com", getName(), getEmail(), getRole());
           
            expect(employee.name).toEqual("Dani")
            expect(employee.id).toEqual("2")
            expect(employee.email).toEqual("dani@gmail.com")
            expect(employee.getName()).toEqual("Dani")
            expect(employee.getEmail()).toEqual("dani@gmail.com")
            expect(employee.getRole()).toEqual("Employee")

        })
    })
})
