// This is the constructor for the employee class. It is the parent object to the other classes of employees. 
class Employee {
    constructor(name, id, email, position) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.position = position;
    }

    getRole() {
        return "Employee";
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }
    renderBaseHtml(input) {
        return `     <div class="card m-5 border-dark rounded- mt-3 col-4">
        <div class="card-body bg-warning">
            <div class="card-title bg- text-dark fs-2 p-2 text-center border-bottom border-dark">Name:👋${this.name}</div>
            <div class="card-subtitle fs-4 text-center">Position: 💪${this.position}</div>
            <div class="card-text fs-4 text-center">
                <a href="mailto:dani@danil.com">Email: ✉ ${this.email}</a>
                <br>
                ${input}
            </div>
        </div>
    </div>`;            
    }

    renderSpecificHTML() {
        return;
    }
}

module.exports = Employee
