var http = require('http'),
    path = require('path'),
    methods = require('methods'),
    express = require('express'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    cors = require('cors'),
    passport = require('passport'),
    errorhandler = require('errorhandler'),
    mongoose = require('mongoose');

var isProduction = process.env.NODE_ENV === 'production';

// Create global app object
var app = express();

app.use(cors());

// Normal express config defaults
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(require('method-override')());
app.use(express.static(__dirname + '/public/dist'));

app.use(session({ secret: 'enigma', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false  }));

if (!isProduction) {
  app.use(errorhandler());
}

if(isProduction){
  mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose.connect('mongodb://enigma:6wvSKQL5@ds163681.mlab.com:63681/enigma');
  mongoose.set('debug', true);
}

require('./models/User');
// require('./models/Reseller');
// require('./models/Tenant');
require('./config/passport');

app.use(require('./routes'));

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (!isProduction) {
  app.use(function(err, req, res, next) {
    console.log(err.stack);

    res.status(err.status || 500);

    res.json({'errors': {
      message: err.message,
      error: err
    }});
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({'errors': {
    message: err.message,
    error: {}
  }});
});

// finally, let's start our server...
//var server = app.listen( process.env.PORT || 8000, function(){
//  console.log('Listening on port ' + server.address().port);
//});

var Ansible = require('node-ansible');

var launchInstance = function(emit){
   var awsPlaybook = new Ansible.Playbook().playbook('/etc/ansible/cluster');
   var awsPlayExec = awsPlaybook.exec();

   awsPlayExec.then(function(successResult) {
     emit(successResult.output);

     var dockerPlaybook = new Ansible.Playbook().playbook('/etc/ansible/docker');
     var dockerPlayExec = dockerPlaybook.exec();

     dockerPlayExec.then(function(successResult) {
       emit(successResult.output);

       var swarmPlaybook = new Ansible.Playbook().playbook('/etc/ansible/swarm');
       var swarmPlayExec = swarmPlaybook.exec();

       swarmPlayExec.then(function(successResult) {
         emit(successResult.output);

       }, function(eror) { emit(error); } );
     }, function(eror) { emit(error); } );
     }, function(error) {
       emit(error);
   });
}


var server = require('http').Server(app);
var io = require('socket.io')(server);
server.listen(8000);
io.on('connection', function (socket) {
  var emit = function(text){
    console.log(text);
    socket.emit('response', { data: text });
  }
  socket.on('lanchInstance', function (data) {
    launchInstance(emit);
    console.log(data);
  });
});
