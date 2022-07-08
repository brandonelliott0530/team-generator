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

 getId() { 
    return this.id 
   }

 getRole() {
    return "Intern"
   }

// Renders the sepecific HTML for the intern
    renderSpecificHTML() {
        const input = `<p class="mt-1 fs-4">${this.getName()} is currently attending classes at ${this.getSchool()}.</p>`
        return this.renderBaseHtml(input)
    }

}

module.exports = Intern 