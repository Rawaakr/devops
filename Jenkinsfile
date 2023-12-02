pipeline {
	agent any

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
					sh 'docker build -t rawaakr1/imgdev1 .'
				}
			}
		}
		stage('Deploy') {
			steps {
				script {
					sh 'docker-compose up -d'
				}
			}
		}
	}
}
