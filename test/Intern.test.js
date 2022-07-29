import Intern from "../lib/Intern.js"

let intern = new Intern();

console.log("Testing Employee Class:")

test('Testing get name function', ()=>{
    expect(intern.getName()).toBe("Default");
})

test('Testing get ID function', ()=>{
    expect(intern.getId()).toBe("100");
})

test('Testing get email function', ()=>{
    expect(intern.getEmail()).toBe("test@gmail.com");
})

test('Testing get github function', ()=>{
    expect(intern.getSchool()).toBe("Harvard");
})