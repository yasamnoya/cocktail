module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Steps', {
      recipeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        reference: { model: 'Recipes', key: 'id' },
      },
      stepNo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      instruction: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Steps');
  },
};
