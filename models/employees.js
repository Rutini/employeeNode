'use strict';

module.exports = (sequelize, DataTypes) => {
    const Employee = sequelize.define('employees', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING(30),
                allowNull: false,
                validate: {
                    min: 3,
                    max: 30
                }
            },
            active: {
                type: DataTypes.BOOLEAN,
                allowNull: false
            },
            department_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    isNumeric: true
                }
            }
        },
        {
            tableName: 'employees',
            timestamps: false
        }
    );
    const Department = sequelize.import('./departments.js');
    Employee.belongsTo(Department, {foreignKey: 'department_id'});
    return Employee;
};
