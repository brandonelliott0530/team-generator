class Employee {
    constructor(name, id, email, position) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.position = position;
    }

    renderBaseHtml(input) {
        return `<div class="card">
            <div class="card-body">
                <div class="card-title">${this.name}</div>
                <div class="card-subtitle">${this.position}</div>
                <div class="card-text">
                    <a href="mailto:${this.email}">Email </a>
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
