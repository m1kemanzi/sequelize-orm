// salaryController.js

const Salary = require('../models/salary.js'); // Import the Salary model.

module.exports = {
    createSalary: async(salaryData) => {
        return Salary().create(salaryData);
    },

    getSalaryByEmployeeId: async(employeeId) => {
        return Salary().findOne({ where: { employeeId: employeeId } });
    },

    updateSalary: async(salaryId, updatedData) => {
        return Salary().update(updatedData, { where: { id: salaryId } });
    },

    deleteSalary: async(salaryId) => {
        return Salary().destroy({ where: { id: salaryId } });
    },

    // Additional methods can be added as necessary.
};