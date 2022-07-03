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
        const input = `${this.getName()} is currently working in office number ${this.getOfficeNumber()}`
        return this.renderBaseHtml(input)
    }
}
module.exports = Manager

        
