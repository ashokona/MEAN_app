pipeline {
  agent any
  stages {
    stage('Docker Build ') {
      steps {
        sh ''' sudo docker-compose rm  -f 
sudo docker-compose build  && sudo docker-compose up -d'''
      }
    }
    stage('Runnig Dockers') {
      steps {
        sh 'sudo docker ps'
      }
    }
  }
}
