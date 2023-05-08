pipeline {
    agent {
        docker {
            image 'node:lts-bullseye-slim'
            args '-p 3000:3000'
        }
    }
    stages {
        stage('Install dependencies') {
            steps {
                sh 'corepack enable'
                sh 'corepack prepare pnpm@latest-8 --activate'
                sh 'pnpm install'
            }
        }
        stage('Unit Test') {
            steps {
                sh 'pnpm test:ci'
            }
        }
    }
}