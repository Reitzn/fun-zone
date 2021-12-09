# My fun-zone

This project was started for the purpose of helping me learn and practice development skills. 

## The Set Up

- Bootstraped from create-react-app
- Using react-router-dom v6 for navigation
- Firebase Authentication for user prfiles 
- Firebase Hosting for web hosting 
- GitHub Actions for building and deploying 

## GitHub Flow

When a PR is opnend, a build script is kicked off. This will build the code and run eslint to make sure it will merge correctly. 

There is another GitHub Action that runs when the PR is merged into 'main'. This installs dependicanys, builds the code, and then deploys it to my Firebase Hosting.

## UI 

- Using react-bootstrap for some components

