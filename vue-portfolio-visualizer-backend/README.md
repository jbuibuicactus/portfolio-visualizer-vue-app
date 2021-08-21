# Vue Portofolio Visualizer Backend Documentation

## Description
This repository holds the backend api for the Vue Portfolio Visualizer application. Using express, sequelize, pg, this backend api will serve the application saved data from the postgres database to the Vue Portfolio Visualizer frontend client. The repository has the models and the controllers that the front end will utilize to communicate with the database. 

## Independent Dev Deployment

This repository can be deployed independently outside the docker container using the command `npm run serve`.

## Design

### Models

#### `index.js`
The `index.js` file is where the `Sequelize` object instantiated and is given the postgres information in order to connect to our database. The actual `model.js` files are imported into the database in this file. 

#### `model.js`

In each individual `.model.js` file the schema of a table is designed. The name of the table as well as the types of each columns are provided and exported to the database. 

### Controllers

#### `controller.js`

In each individual `.controller.js` file the actions that application users can conduct in order to interact with database (i.e. retrieve, update, or delete entries). In addition to the expected CRUD operations, developers can design more complex functions to conduct more specific interactions with the database. 

### Routes

#### `routes.js`

By importing the associated `.controller.js` file, the `.routes.js` file can map the different controller actions to different end points (URLs) and then through hooking up to the express router can be reached from the front end client in order to retrieve the desired information. The different `.routes.js` files need to be imported in the main `server.js` file in order to make sure the routes are actually set up for the application. 
