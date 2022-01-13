const { TestWatcher } = require('jest');
const Engineer = require('../lib/Engineer');

test("get github", ()=>{
    const testGithub = "allyB"
    const engineer = new Engineer("ally",1, "test@test.com",testGithub);
    expect(engineer.github).toBe(testGithub)
});


test("get role", ()=>{
    const testRole = "Engineer"
    const engineer = new Engineer("ally",1, "test@test.com", "testGithub");
    expect(engineer.getRole()).toBe(testRole)
});