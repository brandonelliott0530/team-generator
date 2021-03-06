// requires the employee class
const Employee = require("./Employee")
// constructor for the manager class
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email, "Manager")
        this.officeNumber = officeNumber
    }

    getOfficeNumber() {
        return this.officeNumber
    }

    getName() {
        return this.name
    }

    getId() {
        return this.id
    }

    getRole() {
        return "Manager"
    }
    
     renderSpecificHTML() {
        const input = `<p class="mt-1 fs-4">${this.getName()} is currently working in office number ${this.getOfficeNumber()}</p>`
        return this.renderBaseHtml(input)
    }
}
module.exports = Manager

        
