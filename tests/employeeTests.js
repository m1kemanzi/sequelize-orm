// employeeController.test.js
const { createEmployee, getEmployeeByEmail } = require('../CRUD/EmployeeController');

// A helper function to clear the employees table before each test
const clearEmployeesTable = async() => {
    await db.query('DELETE FROM employees');
};

describe('EmployeeController', () => {
    beforeEach(async() => {
        await clearEmployeesTable();
    });

    afterAll(async() => {
        await db.end(); // Close database connection when done
    });

    it('should create an employee', async() => {
        const employeeData = { name: 'John Doe', email: 'john.doe@example.com', departmentId: 1 };

        // Create an employee
        await createEmployee(employeeData);

        // Fetch the employee from the database
        const employee = await getEmployeeByEmail(employeeData.email);

        // Assertions to ensure the employee was created correctly
        expect(employee).toBeDefined();
        expect(employee.name).toBe(employeeData.name);
        expect(employee.email).toBe(employeeData.email);
    });

    // Additional tests for read, update, delete...
});