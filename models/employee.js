// Employee.js

'use strict';

const Sequelize = require('sequelize');
const process = require('process');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
let sequelize;
sequelize = new Sequelize(config.database, config.username, config.password, config);

const { Model, DataTypes } = require('sequelize');

module.exports = () => {
    class Employee extends Model {
        // Associations can be defined here
        static associate(models) {
            // Associate Employee with Salary
            Employee.hasOne(models.Salary, {
                foreignKey: 'employeeId',
                as: 'salary'
            });

            // Associate Employee with Department
            Employee.belongsTo(models.Department, {
                foreignKey: 'departmentId',
                as: 'department'
            });
        }
    }

    Employee.init({
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true,
            }
        },
        phoneNumber: DataTypes.STRING,
        hireDate: DataTypes.DATE,
        jobTitle: DataTypes.STRING,
        departmentId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Employee',
        // If you need to set a specific table name, do so here
        tableName: 'employees'
    });

    sequelize.sync({ force: false });

    return Employee;
};