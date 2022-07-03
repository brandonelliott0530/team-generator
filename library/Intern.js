// requires the employee.js file to be loaded
const Employee = require("./Employee")

// contructor for an intern

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email, "Intern", school)
        this.school = school
    }

 getSchool() { 
    return this.school
 }
 getName() {
    return this.name
 }

    renderSpecificHTML() {
        const input = `<p>${this.getName()} is currently attending classes at ${this.getSchool()}.</p>`
        return this.renderBaseHtml(input)
    }

}

module.exports = Intern 