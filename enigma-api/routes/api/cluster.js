var Ansible = require('node-ansible');

var launchInstance = function(){
   var awsPlaybook = new Ansible.Playbook().playbook('/etc/ansible/cluster');
   var awsPlayExec = awsPlaybook.exec();

   awsPlayExec.then(function(successResult) {
     console.log(successResult.output);

     var dockerPlaybook = new Ansible.Playbook().playbook('/etc/ansible/docker');
     var dockerPlayExec = dockerPlaybook.exec();

     dockerPlayExec.then(function(successResult) {
       console.log(successResult.output);

       var swarmPlaybook = new Ansible.Playbook().playbook('/etc/ansible/swarm');
       var swarmPlayExec = swarmPlaybook.exec();

       swarmPlayExec.then(function(successResult) {
         console.log(successResult.output);
       }, function(eror) { console.log(error); } );
     }, function(eror) { console.log(error); } );
     }, function(error) {
       console.error(error);
   });
}


//launchInstance()
module.exports =  {"launchInstance": launchInstance};
