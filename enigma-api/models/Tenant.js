var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var secret = require('../config').secret;

var TenantSchema = new mongoose.Schema({
  username: {type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true},
  email: {type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true},
  bio: String,
  image: String,
  role : {
    type : String,
    enum : ['Tenant', 'Reseller', 'Client'],
    default: 'Client'
  },
  hash: String,
  salt: String,
  organisationName: String,
  resellerId : String,
  location : String,
}, {timestamps: true});

TenantSchema.plugin(uniqueValidator, {message: 'is already taken.'});

TenantSchema.methods.validPassword = function(password) {
  var hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
  return this.hash === hash;
};

TenantSchema.methods.setPassword = function(password){
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};

TenantSchema.methods.generateJWT = function() {
  var today = new Date();
  var exp = new Date(today);
  exp.setDate(today.getDate() + 60);

  return jwt.sign({
    id: this._id,
    username: this.username,
    exp: parseInt(exp.getTime() / 1000),
  }, secret);
};

TenantSchema.methods.toAuthJSON = function(){
  return {
    username: this.username,
    email: this.email,
    role : this.role,
    token: this.generateJWT()
  };
};

TenantSchema.methods.toProfileJSONFor = function(user){
  return {
    username: this.username,
    bio: this.bio,
    image: this.image || 'https://static.productionready.io/images/smiley-cyrus.jpg',
  };
};


mongoose.model('User', TenantSchema);
