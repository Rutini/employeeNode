'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('departments', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING(30)
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('departments');
  }
};
