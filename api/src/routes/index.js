const router = require('express').Router();

router.get('/', (req, res) => {
  res.json({ message: 'API is running' });
});

router.get('/recipe', require('./recipe.route'));

module.exports = router;
