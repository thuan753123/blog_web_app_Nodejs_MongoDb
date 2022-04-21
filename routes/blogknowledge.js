var express = require('express');
var router = express.Router();

/* GET blogknowledge page */
router.get('/blogknowledge-batteryboost',function(req, res, next){
    res.render('blogknowledge/blogknowledge-batteryboost',{title: 'BlogKnowledge-BatteryBoost'},);
  })


module.exports = router;