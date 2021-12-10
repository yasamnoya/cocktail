const { getRecipe } = require('../controllers/recipe.controller');
const { Recipe } = require('../models');

const createRecipe = async (recipeBody) => {
  const recipe = await Recipe.create(recipeBody);
  return recipe;
};

const queryRecipes = async (filter) => {
  const result = await Recipe.findAll(filter);
  return result;
};

const getRecipeById = async (recipeId) => {
  const recipe = await Recipe.findOne({ where: { id: recipeId } });
  return recipe;
};

const updateRecipe = async (recipeId, updateBody) => {
  const [numOfUpdates, updatedRow] = await Recipe.update(
    updateBody,
    { where: { id: recipeId }, returning: true },
  );

  if (!numOfUpdates) return null;
  return updatedRow;
};

const deleteRecipe = async (recipeId) => {
  const result = await Recipe.delete({ where: { id: recipeId } });
  return result;
};

module.exports = {
  createRecipe,
  queryRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
};
