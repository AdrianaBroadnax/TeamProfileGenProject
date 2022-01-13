const { TestWatcher } = require('jest');
const Intern = require('../lib/Intern');

test("get school", ()=>{
    const testSchool = "uPenn"
    const intern = new Intern("ally", 1, "test@test.com", testSchool);
    expect(intern.school).toBe(testSchool)
});


test("get role", ()=>{
    const testRole = "Intern"
    const intern = new Intern("ally",1, "test@test.com", "testSchool");
    expect(intern.getRole()).toBe(testRole)
});


