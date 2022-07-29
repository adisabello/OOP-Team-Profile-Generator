import Employee from "../lib/Employee.js"

let employee = new Employee();

console.log("Testing Employee Class:")

test('Testing get name function', ()=>{
    expect(employee.getName()).toBe("Default");
})

test('Testing get ID function', ()=>{
    expect(employee.getId()).toBe("100");
})

test('Testing get email function', ()=>{
    expect(employee.getEmail()).toBe("test@gmail.com");
})