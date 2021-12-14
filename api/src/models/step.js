const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Step extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Recipe, { foreignKey: 'recipeId' });
    }
  }
  Step.init({
    recipeId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    stepNo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    instruction: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Step',
  });
  return Step;
};
