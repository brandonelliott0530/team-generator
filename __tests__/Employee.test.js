const Employee = require ('../library/Employee')
const employee = new Employee("Dani", 321, "dani@gmail.com")

// Tests the constructor functions
test("If the constructor functions are working properly", () => {
    expect(employee.name).toEqual("Dani");
    expect(employee.id).toEqual(321);
    expect(employee.email).toEqual("dani@gmail.com");
})

// Tests the getName method
test("that we can get the name from the getName() method", () => {
    expect(employee.getName()).toBe("Dani");
})
// tests the getEmail method
test("that we can get the email from the getEmail() method", () => {
    expect(employee.getEmail()).toBe("dani@gmail.com")
});
// tests the getId method
test("that we can get the id from the getId() method", () => {
    expect(employee.getId()).toBe(321)
});
// tests the getRole method
test("that we can get the role from the getRole() method", () => {
    expect(employee.getRole()).toBe("Employee")
})


