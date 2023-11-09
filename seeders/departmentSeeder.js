'use strict';

const departmentController = require('../CRUD/DepartmentController.js');

module.exports = {
    up: async(queryInterface, Sequelize) => {
        const departmentData = [
            { name: 'Engineering', description: 'Engineering department' },
            { name: 'Human Resources', description: 'HR department' },
            // ... more department data
        ];

        for (const data of departmentData) {
            await departmentController.createDepartment(data).catch(console.error);
        }
    },

    down: async(queryInterface, Sequelize) => {
        // Here you should put the logic to undo the seeding if necessary
        // This could involve calling a delete method on your departmentController for each department
    }
};