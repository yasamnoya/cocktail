const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Step, { foreignKey: 'recipeId', as: 'steps' });
    }
  }
  Recipe.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    amountInMl: DataTypes.INTEGER,
    avl: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Recipe',
  });
  return Recipe;
};
