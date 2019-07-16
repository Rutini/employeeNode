'use strict';

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('users', {
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
            email: {
                type: DataTypes.STRING(35),
                allowNull: false,
                validate: {
                    isEmail: true
                }
            },
            password: {
                type: DataTypes.STRING(100),
                allowNull: false
            }
        },
        {
            tableName: 'users',
            timestamps: false
        }
    );
};
