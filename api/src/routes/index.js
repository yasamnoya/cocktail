const router = require('express').Router();

router.get('/', (req, res) => {
  res.json({ message: 'API is running' });
});

router.use('/recipes', require('./recipe.route'));

module.exports = router;
