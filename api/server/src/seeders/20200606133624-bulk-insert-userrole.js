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
   return queryInterface.bulkInsert('UserRoles', [
      { role_id: 1 ,user_id: 1,createdAt: new Date(), updatedAt: new Date() },
      { role_id: 2, user_id: 2,createdAt: new Date(), updatedAt: new Date() },
      { role_id: 3, user_id: 3,createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('UserRoles', null, {});
  }
};
