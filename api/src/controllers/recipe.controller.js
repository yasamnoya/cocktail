const { recipeService } = require('../services');

const createRecipe = async (req, res) => {
  const recipe = await recipeService.createRecipe(req.body);
  res.status(201).json(recipe);
};

const getRecipes = async (req, res) => {
  const result = await recipeService.queryRecipes();
  res.json(result);
};

const getRecipe = async (req, res) => {
  const recipe = await recipeService.getRecipeById(req.params.id);

  if (!recipe) return res.status(404).json({ message: 'recipe not found' });
  res.json(recipe);
};

const updateRecipe = async (req, res) => {
  const recipe = await recipeService.updateRecipeById(req.params.id, req.body);

  if (!recipe) return res.status(404).json({ message: 'recipe not found' });
  res.json(recipe);
};

const deleteRecipe = async (req, res) => {
  const result = await recipeService.deleteRecipeById(req.params.id);

  if (!result) return res.status(404).json({ message: 'recipe not found' });
  res.status(204).send();
};

module.exports = {
  createRecipe,
  getRecipes,
  getRecipe,
  updateRecipe,
  deleteRecipe,
};
