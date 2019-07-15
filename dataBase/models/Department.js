'use strict';

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Department', {
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
};
