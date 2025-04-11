# Practice Interviews Web Application

[![Super-Linter](https://github.com/FractalLabsDev/practice-interviews-web/actions/workflows/super-linter.yml/badge.svg)](https://github.com/marketplace/actions/super-linter)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Development Mode

In development, there is CORS policy error when calling third party and backend APIs which is normal behavior.
In production mode, this error won't happen so we need some trick to test a web application in development mode

Run this command in Terminal in Mac

`open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security`

Or you can run this command in terminal

`yarn disable-cors-chrome-mac`

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn lint`

Run ESLint checks for source code and it will throw exceptions when there's lint errors or warnings
