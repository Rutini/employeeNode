'use strict';
module.exports = (sequelize, DataTypes) => {
    const Employee = sequelize.define('Employee', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING
            },
            active: {
                type: DataTypes.BOOLEAN
            },
            department_id: {
                type: DataTypes.INTEGER
            }
        },
        {
            tableName: 'employees',
            timestamps: false
        }
    );
    const Department = sequelize.import('./Department.js');
    Employee.belongsTo(Department, {foreignKey: 'department_id'});
    return Employee;
};
