const router = require('express').Router();
const { recipeController } = require('../controllers');

router.route('/')
  .post(recipeController.createRecipe)
  .get(recipeController.getRecipes);

router.route('/:recipeId')
  .get(recipeController.getRecipe)
  .patch(recipeController.updateRecipe)
  .delete(recipeController.deleteRecipes);

module.exports = router;
