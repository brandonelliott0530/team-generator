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

    renderSpecificHTML() {
        const input = `<a href="https://www.github.com/${this.getGithub}">GitHub</a>`
        return this.renderBaseHtml(input)
    }
}

module.exports = Engineer