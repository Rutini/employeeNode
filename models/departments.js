'use strict';

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('departments', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    min: 3,
                    max: 30
                }
            }
        },
        {
            tableName: 'departments',
            timestamps: false
        }
    );
};
