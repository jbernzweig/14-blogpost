const router = require('express').Router();
const path = require('path');
const apiRoutes = require('../api');

router.get('/', async (req, res) => {
    res.render('all');
  });

  module.exports = router;
  