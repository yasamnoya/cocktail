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
      this.hasMany(models.Step, { foreignKey: 'recipeId' });
    }
  }
  Recipe.init({
    title: DataTypes.STRING,
    instruction: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Recipe',
  });
  return Recipe;
};
