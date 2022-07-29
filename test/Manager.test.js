import Manager from "../lib/Manager.js"

let manager = new Manager();

console.log("Testing Manager Class:")

test('Testing get name function', ()=>{
    expect(manager.getName()).toBe("Default");
})

test('Testing get ID function', ()=>{
    expect(manager.getId()).toBe("100");
})

test('Testing get email function', ()=>{
    expect(manager.getEmail()).toBe("test@gmail.com");
})
