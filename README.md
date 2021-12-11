# My fun-zone

This project was started for the purpose of helping me learn and practice development skills.

## The Set Up

- Bootstraped from [create-react-app](https://create-react-app.dev/)
- Using [react-router-dom](https://reactrouter.com/) v6 for navigation
- Firebase Authentication for user profiles
- Firebase Hosting for web hosting
- GitHub Actions for building and deploying

## GitHub Flow

When a PR is opened, a build script is kicked off. This will build the code and run eslint to make sure it will merge correctly.

There is another GitHub Action that runs when the PR is merged into 'main'. This installs dependicanys, builds the code, and then deploys it to my Firebase Hosting.

## UI

- Using [react-bootstrap](https://react-bootstrap.github.io/) for some components

## Run Options

```sh
cd fun-zone
npm start
```
