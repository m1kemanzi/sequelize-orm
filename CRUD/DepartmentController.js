// departmentController.js

const Department = require('../models/Department'); // Import the Department model.

module.exports = {
    createDepartment: async(departmentData) => {
        return Department().create(departmentData);
    },

    getDepartmentById: async(departmentId) => {
        return Department().findByPk(departmentId);
    },

    updateDepartment: async(departmentId, updatedData) => {
        return Department().update(updatedData, { where: { id: departmentId } });
    },

    deleteDepartment: async(departmentId) => {
        return Department().destroy({ where: { id: departmentId } });
    },

    // Additional methods can be added as necessary.
};