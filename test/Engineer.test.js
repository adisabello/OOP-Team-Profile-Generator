import Engineer from "../lib/Engineer.js"

let engineer = new Engineer();

console.log("Testing Engineer Class:")

test('Testing get name function', ()=>{
    expect(engineer.getName()).toBe("Default");
})

test('Testing get ID function', ()=>{
    expect(engineer.getId()).toBe("100");
})

test('Testing get email function', ()=>{
    expect(engineer.getEmail()).toBe("test@gmail.com");
})

test('Testing get github function', ()=>{
    expect(engineer.getGithub()).toBe("testGithub");
})