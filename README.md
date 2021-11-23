# MERN Boilerplate
Author: [aexcode](https://aexcode.com) \
Live Demo: [aexcode-mern-boilerplate.herokuapp.com](https://aexcode-mern-boilerplate.herokuapp.com) \
*Please be aware the app may take 20-30 seconds to wake up.*

## Description
A basic MERN stack, monorepo boilerplate, preconfigured for deployment to Heroku. This template can be hosted on Heroku's free tier or any of the paid plans. 

## Tech
MongoDB | Espress | React | NodeJS

## Prerequisites
- [NodeJS](https://nodejs.org/en)
- [NPM](https://www.npmjs.com)
- [MongoDB Atlas](https://www.mongodb.com/atlas/database)
- [Heroku](https://www.heroku.com)

## Using this Template
1. Click "Use this template" to create a new git repository from this boilerplate template
1. Clone your new git repository to your local computer
1. Open the project in your code editor
1. From the project root, run `npm run install-all` to install all dependencies in the server (Express backend) and client (React frontend).
1. From the project root, run `cp .env.example .env` to copy the contents of the .env.example file to a new .env file. 
1. Add your MongoDB connection string to the newly created .env file as the value for MONGODB_URI
1. To begin the development server, run `npm run dev`.

## Understanding the Code
### Layout
This boilerplate is a MERN-stack monorepo containing both the Express backend (server) and the React frontend (client) in a single location. The file structure is as follows:
```
root
	server
	client
```

The client directory was generated using a minimal Create React App template.

### Dependencies
The project utilizes the following the following dependencies:
- [dotenv](https://www.npmjs.com/package/dotenv) to protect environment variables
- [express](https://www.npmjs.com/package/Express) as the backend framework
- [mongoose](https://www.npmjs.com/package/mongoose) to connect to the MongoDB database
- [create react app](https://create-React-app.dev) as the frontend framework

The project utilizes the following dev dependencies:
- [nodemon](https://www.npmjs.com/package/nodemon) to automatically restart the development server
- [concurrently](https://www.npmjs.com/package/concurrently) to run the development server and client applications at the same time

### Scripts
The project contains the following scripts which can be run from the root directory:
- `npm run install-all` to install all dependencies in the server and client directories
- `npm run client` to start the frontend application
- `npm run dev` to start the development server and frontend application concurrently
- `npm run server` to start the development server with automatic restart
- `npm run start` to start the server without automatic restart

The project also contains a postbuild script for heroku called `heroku-postbuild`. If deployed to Heroku, Heroku will run this script prior to deploying or re-deploying your application.

### The Proxy
The client contains a proxy in the package.json file to manipulate any API requests made from the client to appear as though the request were made from the server itself. This prevents any Cross-Origin Resource Sharing (CORS) issues.

## Deploying to Heroku
Resources:
- [Heroku's Dev Center](https://devcenter.heroku.com)
	- [Deploying with Git](https://devcenter.heroku.com/articles/git)
	- [The Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)

### Deploying via Github
This template is preconfigured for deployment. It can be deployed without any changes being made. 

*If you have made any changes to the local code, other than those listed in the "Using this Template" section, you'll have to push those changes up to github if you want to see them in your deployed application.*

- [Create a new Heroku App](https://dashboard.heroku.com/new-app) from your Heroku Dashboard
- Navigate to the new app's settings tab
- Scroll down to "Config Vars"
- Click "Reveal Config Vars"
- Add `MONGODB_URI` to the input labeled "KEY"
- Add your MongoDB connection string to the input labeled "VALUE" 
- Click "Add" to add the environment variable to heroku
- Navigate to the "Deploy" tab
- Scroll down to "Deployment Method"
- Select "Github: Connect to Github" to toggle the CLI / Github steps
- Scroll down and connect your account to github if it isn't already
- Search for and connect the appropriate repository
- Scroll down to decide if you'd like to enable automatic deploys (recommended)
- Scroll down and click "Deploy branch"
- Once the deployment has completed, scroll to the top and click "Open App" to view the deployed application. 
