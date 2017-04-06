const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
var guestsController = require('../controllers/guestsController');

router.get('/',function(req,res){
  res.send('HOMEPAGE');
})


router.get('/Top',guestsController.viewTop);
router.get('/All',guestsController.viewAll);

router.post('/login',guestsController.login);


module.exports = router;
