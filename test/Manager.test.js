const { TestWatcher } = require('jest');
const Manager = require('../lib/Manager');


test("get office number", ()=>{
    const testNumber = "727"
    const manager = new Manager("ally", 1, testNumber, "test@test.com");
    expect(manager.getNumber()).toBe(testNumber)
});


test("get role", ()=>{
    const testRole = "Manager"
    const manager = new Manager("ally",1, "testtest.com", "testNumber");
    expect(manager.getRole()).toBe(testRole)
});
