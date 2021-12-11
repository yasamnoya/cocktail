const routes = [
  {
    path: '/recipes/new',
    name: 'CreateRecipe',
    component: () => import('../views/recipe/CreateRecipe.vue'),
  },
];

export default routes;
