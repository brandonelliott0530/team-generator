const Employee = require("./Employee")

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
    
     renderSpecificHTML() {
        const input = `<p class="mt-1 fs-4">${this.getName()} is currently working in office number ${this.getOfficeNumber()}</p>`
        return this.renderBaseHtml(input)
    }
}
module.exports = Manager

        
