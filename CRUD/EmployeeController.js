// employeeController.js
const Sequelize = require('sequelize');
const process = require('process');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
let sequelize;
sequelize = new Sequelize(config.database, config.username, config.password, config);

const Employee = require('../models/employee'); // Import the Employee model.

console.log(Employee);

module.exports = {
    createEmployee: async(employeeData) => {
        return Employee().create(employeeData);
    },

    getEmployeeById: async(employeeId) => {
        return Employee().findByPk(employeeId);
    },

    updateEmployee: async(employeeId, updatedData) => {
        return Employee().update(updatedData, { where: { id: employeeId } });
    },

    deleteEmployee: async(employeeId) => {
        return Employee().destroy({ where: { id: employeeId } });
    },

    // Additional methods can be added as necessary.
};