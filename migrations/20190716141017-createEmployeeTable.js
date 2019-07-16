'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('employees', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      active: {
        type: Sequelize.BOOLEAN
      },
      department_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'departments',
          key: 'id'
        }
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('employees');
  }
};
