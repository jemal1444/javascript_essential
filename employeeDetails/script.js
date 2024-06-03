document.addEventListener("DOMContentLoaded", function() {
    const employees = [
        { name: 'John Doe', position: 'Software Engineer', department: 'Development', salary: 60000 },
        { name: 'Jane Smith', position: 'Project Manager', department: 'Management', salary: 75000 },
        { name: 'Sam Brown', position: 'Designer', department: 'Design', salary: 50000 },
        { name: 'Lucy Black', position: 'QA Tester', department: 'Quality Assurance', salary: 45000 }
    ];

    const employeeTableBody = document.querySelector("#employeeTable tbody");

    // Function to create a table row for an employee
    function createEmployeeRow(employee) {
        const row = document.createElement('tr');
        Object.values(employee).forEach(value => {
            const cell = document.createElement('td');
            cell.textContent = value;
            row.appendChild(cell);
        });
        return row;
    }

    // Function to display all employees
    function displayEmployees(employeeArray) {
        employeeArray.forEach(employee => {
            const employeeRow = createEmployeeRow(employee);
            employeeTableBody.appendChild(employeeRow);
        });
    }

    // Function to filter employees by department
    function filterByDepartment(department) {
        return employees.filter(employee => employee.department === department);
    }

    // Display all employees initially
    displayEmployees(employees);

    // Example: Filter and display only 'Development' department employees
    // const developmentEmployees = filterByDepartment('Development');
    // displayEmployees(developmentEmployees);
});
