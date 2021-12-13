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
      this.belongsTo(models.Recipe);
    }
  }
  Step.init({
    recipe_id: DataTypes.INTEGER,
    step_no: DataTypes.INTEGER,
    instruction: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Step',
  });
  return Step;
};
