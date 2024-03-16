# Mern-Diary

## This project is intented as a practice project for learning how to use the MERN technologies as a whole. It will consists of a web diary. It will not have authentication for the time being.

## As mentioned above, this project will use the MERN technologies, that is, MongoDB as the database management system, NodeJS alongside Express to create the API backend, and React to create the app's frontend

First the Backend Configuration

## BackEnd

A backend folder must be created inside the main folder. inside this, there must bee a server.js file which is the api itself. However, before doing anything further we must create a package.json file by using npm command as follows

`npm init -y`

The -y automatically sets the npm configuration. Then we need to install express and nodemon (if you wish that changes to the server.js file automatically restart the server, which is quite convenient)

`npm install express`

`npm install nodemon`

It is also useful to handle some information in an .env file, that won't be send to the repository, because it is in the .gitignore file. For this there has to be a .env file in which there is sensitive information such as db connection strings or port numbers. In order for this to work you'll have to install dotenv

`npm install dotenv`

Then you'll have to require dotenv in the server.js file and use the configure() method right after. Then the process object will be available and you can use the variables like process.env.VARIABLE

For the routes, they can be created inside the server.js file itself, but it seems it would be better to create a separate file for them. However the app variable containing express() method is required to create the routes. To fix this, we must require express in the routes file, and asing a variable to express.Router(), that way we can create endpoints using that variable. But we must add this const variable in module.exports, to import it in the server.js file. Then we can use app.use('route',router) to make it work. The first parameter is the default route we want the other routes in the file to follow.

Things can get quite messy if all the backend endpoints are handled as is. In order to solve that, we make use of controllers, that is, creating another folder with a js file in it that will contain the hard logic behind each endpoint. To accomplish this we must use the router that comes in the mongoose package. Then we make the endpoint code using the router, and export each enpoint with module.exports. This way the endpoints in the routes.js file will be shorter and simpler to read, for they only reference the route and the controller method asociated with it. It makes it a little more organized, if you will.

### DB Connection

This project will use MongoDB Atlas. So the connection URI will be in the .env file, and then the mongoose package must be installed

`npm install mongoose`

Then we will require the mongoose package in the server.js file and use the const it is stored in to call the method connect(dbURI), this returns a promise, so a .then() block will be necessary.

After that, schemas can be used in order to add a degree of strictness that mongo lacks itself. For this, we will create a new folder called models, and within a js file which will require moongose, then we use the moongose.Schema to create a JSON object that describes the structure of data we want. Then we have to export it with module.exports

---

## FrontEnd

As usual when creating a React app, we need to use the command:

`npx create-react-app nameofthefolder`

This will create a folder with a react app within it. But it has a lot of filler, so we'll be deleting most of it.

Then we need to install a package to manage the different pages we'll be displaying. This is react-router-dom

`npm install react-router-dom`

Once that's done, we use the BrowserRouter, Routes, and Route from the react-router-dom to configure the pages. To organize this better, it is advised to create a folder that contains the pages as react components, separately from the components folder

In order to keep the app in sync when adding or deleting an entry, that is, the new entry is shown without needing to reload the page, we need to use the context tool of react. For this we create a new folder for the context an inside it we import createContext and UseReducer from react. Then we store createContext() in a const, create the UseReducer hook that is made up of an array of a variable and a function [state, dispatch] (dispatch function takes two paramenters: an object {type:'any'}) describing the type of action we want to do, this is custombizable, and an array containing the information.Then, useReducer(callback,{initState:null}) that takes a callback function and an object with the initial state, obviously the callback function should be defined, it should contain a switch in regard to the action's type.

Lastly, we create a functional component, but using as main container the const we had assigned the createContext() function, and calling Provider, like if const con = createContext(), then <con.Provider><con.Provider/>. We export each function separately. Then we need to suround the whole app with the functional component, for this we import the component in the index.js file and simply suround the app component.

Also, to better depict the dates, you can use the date-fns package

:)
