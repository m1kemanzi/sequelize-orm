'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        const salaryData = [
            { employeeId: 9, amount: 50000, currency: 'USD' },
            { employeeId: 10, amount: 55000, currency: 'USD' },
            // Add more salary objects as needed
        ];

        await queryInterface.bulkInsert('salaries', salaryData); // Note: 'Salaries' should be the actual table name in your database.
    },

    down: async(queryInterface, Sequelize) => {
        // Undo the seeding, possibly by emptying the Salaries table
        await queryInterface.bulkDelete('Salaries', null, {});
    }
};