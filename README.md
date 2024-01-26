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


:)
