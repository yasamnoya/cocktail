const { Op } = require('sequelize');
const { Recipe, Step } = require('../models');

const createRecipe = async (bodyRecipeWithoutSteps, bodySteps) => {
  const recipe = await Recipe.create(bodyRecipeWithoutSteps);
  const bodyStepsWithRecipeId = bodySteps.map((step) => ({ recipeId: recipe.id, ...step }));
  const steps = await Step.bulkCreate(bodyStepsWithRecipeId);
  await recipe.addStep(steps);
  await recipe.reload({ include: ['steps'] });
  return recipe;
};

const queryRecipes = async (filter) => {
  const result = await Recipe.findAll(filter);
  return result;
};

const getRecipeById = async (recipeId) => {
  const recipe = await Recipe.findOne({ where: { id: recipeId }, include: ['steps'] });
  return recipe;
};

const updateRecipeById = async (recipeId, bodyRecipeWithoutSteps, bodySteps) => {
  const recipe = await Recipe.findOne({ where: { id: recipeId } });
  if (!recipe) return null;

  await recipe.update(bodyRecipeWithoutSteps);

  const bodyStepsWithRecipeId = bodySteps.map((step) => ({ recipeId, ...step }));
  await Step.destroy({ where: { recipeId, stepNo: { [Op.gt]: bodySteps.length } } });
  await Step.bulkCreate(bodyStepsWithRecipeId, { updateOnDuplicate: ['instruction'] });

  await recipe.reload({ include: ['steps'] });
  return recipe;
};

const deleteRecipeById = async (recipeId) => {
  const result = await Recipe.destroy({ where: { id: recipeId } });
  await Step.destroy({ where: { recipeId } });
  return result;
};

module.exports = {
  createRecipe,
  queryRecipes,
  getRecipeById,
  updateRecipeById,
  deleteRecipeById,
};
