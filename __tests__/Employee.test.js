const Employee = require ('../library/Employee')
const employee = new Employee("Dani", 321, "dani@gmail.com")


test("If the constructor functions are working properly", () => {
    expect(employee.name).toEqual("Dani");
    expect(employee.id).toEqual(321);
    expect(employee.email).toEqual("dani@gmail.com");
})

test("that we can get the name from the getName() method", () => {
    expect(employee.getName()).toBe("Dani");
})

test("that we can get the email from the getEmail() method", () => {
    expect(employee.getEmail()).toBe("dani@gmail.com")
});

test("that we can get the id from the getId() method", () => {
    expect(employee.getId()).toBe(321)
});

test("that we can get the role from the getRole() method", () => {
    expect(employee.getRole()).toBe("Employee")
})


