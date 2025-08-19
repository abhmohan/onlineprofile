pipeline {
    agent any

    tools {
        nodejs 'NodeJS_18' // Ensure this is configured in Jenkins global tool configuration
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        // stage('Install Dependencies') {
        //     steps {
        //         sh 'npm install'
        //     }
        // }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}