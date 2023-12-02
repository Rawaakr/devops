pipeline {
    agent any

    environment {
        DOCKER_HUB_CREDENTIALS = credentials('dockeraccess')
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build and Test') {
            steps {
                scripts {
                    sh 'npm install'
                    sh 'npm test'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t rawaakr1/imgdev1:latest .'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Authentification Docker
                    withCredentials([string(credentialsId: 'dockeraccess', variable: 'DOCKER_HUB_CREDENTIALS')]) {
                        sh "docker login -u rawaakr1 -p ${DOCKER_HUB_CREDENTIALS} docker.io"
                    }

                    // Poussez l'image vers Docker Hub
                    sh 'docker push rawaakr1/imgdev1:latest'

                    // Déployer l'application avec docker-compose
                    sh 'docker-compose up -d'
		    sh 'until curl -f http://localhost:3000; do sleep 10; done'	                
		}
            }
        }
    }
}

