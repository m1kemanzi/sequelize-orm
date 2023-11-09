'use strict';
const { Model, DataTypes } = require('sequelize');
const Sequelize = require('sequelize');
const process = require('process');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
let sequelize;
sequelize = new Sequelize(config.database, config.username, config.password, config);

module.exports = () => {
    class Department extends Model {
        static associate(models) {
            // A Department can have many Employees
            Department.hasMany(models.Employee, { foreignKey: 'departmentId' });
        }
    }

    Department.init({
        name: DataTypes.STRING,
        description: DataTypes.TEXT
    }, {
        sequelize,
        modelName: 'Department',
    });

    sequelize.sync({ force: false });

    return Department;
};