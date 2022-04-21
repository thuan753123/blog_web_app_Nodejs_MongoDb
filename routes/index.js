var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'kentsharedtips' });
});

/* GET blogIT page */
router.get('/blogIT',function(req, res, next){
  res.render('blogIT',{title: 'BlogIT'});
})

/* GET blogtips page */
router.get('/blogtips',function(req, res, next){
  res.render('blogtips',{title: 'BlogTips'});
})

/* GET blogknowledge page */
router.get('/blogknowledge',function(req, res, next){
  res.render('blogknowledge',{title: 'BlogKnowledge'});
})

/* GET contact page */
router.get('/contact',function(req, res, next){
  res.render('contact',{title: 'Contact'});
})





module.exports = router;
