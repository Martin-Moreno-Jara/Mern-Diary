# Mern-Diary
This project is intented as a practice project for learning how to use the MERN technologies as a whole. It will consists of a web diary. It will not have authentication for the time being.
---
As mentioned above, this project will use the MERN technologies, that is, MongoDB as the database management system, NodeJS alongside Express to create the API backend, and React to create the app's frontend
---
First the Backend Configuration
## Backend
A backend folder must be created inside the main folder. inside this, there must bee a server.js file which is the api itself. However, before doing anything further we must create a package.json file by using npm command as follows

`npm init -y`


The -y automatically sets the npm configuration. Then we need to install express and nodemon (if you wish that changes to the server.js file automatically restart the server, which is quite convenient)


`npm install express`


`npm install nodemon`


It is also useful to handle some information in an .env file, that won't be send to the repository, because it is in the .gitignore file. For this there has to be a .env file in which there is sensitive information such as db connection strings or port numbers. In order for this to work you'll have to install dotenv


`npm install dotenv`


Then you'll have to require dotenv in the server.js file and use the configure() method right after. Then the process object will be available and you can use the variables like process.env.VARIABLE

For the routes, they can be created inside the server.js file itself, but it seems it would be better to create a separate file for them. However the app variable containing express() method is required to create the routes. To fix this, we must require express in the routes file, and asing a variable to express.Router(), that way we can create endpoints using that variable. But we must add this const variable in module.exports, to import it in the server.js file. Then we can use app.use('route',router) to make it work. The first parameter is the default route we want the other routes in the file to follow.

### DB Connection
This project will use MongoDB Atlas. So the connection URI will be in the .env file, and then the mongoose package must be installed


`npm install mongoose`


Then we will require the mongoose package in the server.js file and use the const it is stored in to call the method connect(dbURI), this returns a promise, so a .then() block will be necessary.


After that, schemas can be used in order to add a degree of strictness that mongo lacks itself. For this, we will create a new folder called models, and within a js file which will require moongose, then we use the moongose.Schema to create a JSON object that describes the structure of data we want. Then we have to export it with module.exports 


:)
