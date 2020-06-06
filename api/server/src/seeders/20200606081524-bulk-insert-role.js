'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

   return queryInterface.bulkInsert('Roles', [
      { role_code: 'LEAD' ,role_name: 'lead',createdAt: new Date(), updatedAt: new Date() },
      { role_code: 'DIRECTOR', role_name: 'director',createdAt: new Date(), updatedAt: new Date() },
      { role_code: 'STAFF', role_name: 'staff',createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
