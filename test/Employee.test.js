const { TestWatcher } = require('jest');
const Employee = require('../lib/Employee');


test("get a name from constructor", ()=>{
    const name = "ally" 
    const employee = new Employee(name);
    expect(employee.name).toBe(name)
});

test("get an email from constructor", ()=>{
    const testEmail = "test.test.com"
    const employee = new Employee("ally", 1, testEmail);
    expect(employee.email).toBe(testEmail)
});

test("get an id from constructor", ()=>{
    const testId = 8;
    const employee = new Employee("bob", testId);
    expect(employee.id).toBe(testId)

})