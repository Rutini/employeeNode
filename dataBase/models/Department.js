'use strict';
module.exports = (sequelize, DataTypes) => {
    const Department = sequelize.define('Department', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING
            }
        },
        {
            tableName: 'departments',
            timestamps: false
        }
    );
    return Department;
};
