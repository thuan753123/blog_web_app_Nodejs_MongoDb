
var express = require('express');
var router = express.Router();

/* GET blogtipsdetail page */
router.get('/blogtipsdetailcrackoffice',function(req, res, next){
    res.render('blogtips/blogtipsdetailcrackoffice',{title: 'BlogTipsDetail'},);
  })


/* GET blogtipsdetail page */
router.get('/blogtipsdetailadblock',function(req, res, next){
  res.render('blogtips/blogtipsdetailadblock',{title: 'BlogTipsDetail'});
})

/* GET blogtipsdetail page */
router.get('/blogtipsdetail02',function(req, res, next){
  res.render('blogtips/blogtipsdetail02',{title: 'BlogTipsDetail'});
})

module.exports = router;