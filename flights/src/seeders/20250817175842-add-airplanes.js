'use strict';

const { Op } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airplanes', [{
        modelNumber: 'airbus750',
        capacity:750,
        createdAt:new Date(),
        updatedAt:new Date()
      },
    {
      modelNumber:"Boeing747",
      capacity:747,
       createdAt:new Date(),
        updatedAt:new Date()
    }], {});

    // will run on sequelize seed
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Airplanes',{[Op.or]:[{ modelNumber:"BoeingDeadly"},{ modelNumber: 'airbus750'}]}) // will run on sequelize seed undo
  }
};
