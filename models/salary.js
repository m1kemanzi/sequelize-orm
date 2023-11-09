'use strict';
const { Model, DataTypes } = require('sequelize');

const Sequelize = require('sequelize');
const process = require('process');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
let sequelize;
sequelize = new Sequelize(config.database, config.username, config.password, config);

module.exports = () => {
    class Salary extends Model {
        static associate(models) {
            // A Salary entry belongs to a single Employee
            Salary.belongsTo(models.Employee, { foreignKey: 'employeeId' });
        }
    }

    Salary.init({
        employeeId: DataTypes.INTEGER,
        amount: DataTypes.DECIMAL(10, 2),
        currency: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Salary',
    });

    return Salary;
};