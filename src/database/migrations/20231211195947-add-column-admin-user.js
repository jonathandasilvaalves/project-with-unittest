'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn('users', 'user_admin', {
      type: Sequelize.BOOLEAN,
      defaultValue: 'false'
    });
  },

  async down (queryInterface, Sequelize) {
   return queryInterface.removeColumn('users', 'user_admin');
  }
};
