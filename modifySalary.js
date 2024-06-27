const employees = [
    { id: 1, name: "Alice", department: "sales", salary: 40000 },
    { id: 2, name: "Bob", department: "engineering", salary: 50000 },
    { id: 3, name: "Charlie", department: "marketing", salary: 45000 },
    { id: 4, name: "David", department: "sales", salary: 35000 },
    { id: 5, name: "Emily", department: "engineering", salary: 55000 }
  ];
// Salaries for employees in the "sales" department should be increased by 10%.
// Salaries for employees in the "engineering" department should be increased by 15%.
// Salaries for employees in all other departments should be increased by 5%.
function increaseSalaries(employees){
  const output = employees.map((employees) =>{
    let increament;
// Checking for the department to calculate the increament
    switch (employees.department){
        case 'sale': 
            increament = 0.10;
            break;
        case 'engineering':
            increament = 0.15;
            break;
        default:
            increament = .05;
    }
// newSalary calculation
    const newSalary = employees.salary * (1 + increament);
// Using toFixed() to limit the decimal values to 1
    return{
        ...employees,
        salary: newSalary.toFixed(1)
    }
  })
  return output;
}
// Calling the increaseSalaries() function
const result = increaseSalaries(employees);
console.log(result);