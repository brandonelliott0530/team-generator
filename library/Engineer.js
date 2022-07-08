// Requires the employee.js file
const Employee = require("./Employee")

// Creates a constructor for engineer
class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email, "Engineer")
        this.gitHub = gitHub
    }

   getGithub() {
    return this.gitHub
   }

   getId() { 
    return this.id 
   }

   getRole() {
    return "Engineer"
   }

//    renders the specific HTML for the engineer class
    renderSpecificHTML() {
        const input = `<a class ="mt-1 fs-4" href="https://github.com/${this.getGithub()}" target="_blank">Github: ${this.getGithub()}</a>`
        return this.renderBaseHtml(input)
    }
}

module.exports = Engineer