"use strict";
/*
En el terminal: tsc --init
En tsconfig.json:
 - Descomentar "outDir"
 - Descomentar "rootDir"
 - En outDir poner la ruta a donde quieres que vayas los js
 - En rootDir poner la ruta donde estarán los ts
En el terminal: tsc -w para que compile autonmáticamente
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//console.log('Hola mundo')
var users_1 = require("./users");
var login_1 = __importDefault(require("./login"));
require("jquery");
//import loggedin from './loggedin';
//Otra forma de ponerlo, ! indica que no es nulo
//document.getElementById('loginButton')!.addEventListener();
document.getElementById('loginButton').addEventListener('click', function (e) {
    e.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    login_1.default(users_1.getUsers()[0], { username: username, password: password });
});
//Check if logged in
//loggedin();
//console.log(getUsers());
//login();
//login(getUsers()[0]);
//console.log($('#loginButton'));
