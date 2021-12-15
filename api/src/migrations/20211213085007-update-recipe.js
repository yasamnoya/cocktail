module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('Recipes', 'instruction', 'description');
    await queryInterface.addColumn('Recipes', 'amountInMl', Sequelize.INTEGER);
    await queryInterface.addColumn('Recipes', 'avl', Sequelize.INTEGER);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('Recipes', 'description', 'instruction');
    await queryInterface.removeColumn('Recipes', 'amountInMl');
    await queryInterface.removeColumn('Recipes', 'avl');
  },
};
