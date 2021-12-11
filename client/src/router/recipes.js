const routes = [
  {
    path: '/recipes',
    name: 'ListRecipes',
    component: () => import('../views/recipe/ListRecipes.vue'),
  },
  {
    path: '/recipes/new',
    name: 'CreateRecipe',
    component: () => import('../views/recipe/CreateRecipe.vue'),
  },
];

export default routes;
