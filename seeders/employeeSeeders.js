'use strict';

const employeeController = require('../CRUD/EmployeeController.js');

module.exports = {
    up: async(queryInterface, Sequelize) => {
        const employeeData = [
            { name: 'Alice Smith', email: 'alice.smith@example.com', departmentId: 1 },
            { name: 'Bob Brown', email: 'bob.brown@example.com', departmentId: 1 },
            // ... more employee data
        ];

        for (const data of employeeData) {
            await employeeController.createEmployee(data).catch(console.error);
        }
    },

    down: async(queryInterface, Sequelize) => {
        // Here you should put the logic to undo the seeding if necessary
        // This might involve deleting the employees created above
    }
};