var router = require('express').Router();
var Ansible = require('node-ansible');
var cluster = require('./cluster');

router.use('/', require('./users'));
router.use('/', require('./reseller'));
router.use('/', require('./tenants'));

router.use('/trigger', function(req, res){
  console.log(req);
  cluster.launchInstance();  
  res.send('Hey I Got Triggered!!!!');
});

router.use(function(err, req, res, next){
  if(err.name === 'ValidationError'){
    return res.status(422).json({
      errors: Object.keys(err.errors).reduce(function(errors, key){
        errors[key] = err.errors[key].message;

        return errors;
      }, {})
    });
  }

  return next(err);
});

module.exports = router;
