class Employee { 

    constructor(name, age, salary) { 

        this.name = name; 

        this.age = age; 

        this.salary = salary; 

    } 

} 

function displayEmployeesSortedByName(employees) { 

    employees.sort((a, b) => a.name.localeCompare(b.name)); 

    employees.forEach(employee => { 

        console.log(`Name: ${employee.name}, Age: ${employee.age}, Salary: ${employee.salary}`); 

    }); 

} 

const employee1 = new Employee("John Doe", 30, 50000); 

const employee2 = new Employee("Alice Smith", 25, 60000); 

const employee3 = new Employee("Bob Johnson", 35, 55000); 

const employees = [employee1, employee2, employee3]; 

console.log("Employees sorted by name:"); 

displayEmployeesSortedByName(employees); 