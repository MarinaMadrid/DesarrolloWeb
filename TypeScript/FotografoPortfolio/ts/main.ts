/*
En el terminal: tsc --init
En tsconfig.json:
 - Descomentar "outDir"
 - Descomentar "rootDir"
 - En outDir poner la ruta a donde quieres que vayas los js
 - En rootDir poner la ruta donde estarán los ts
En el terminal: tsc -w para que compile autonmáticamente
*/

//console.log('Hola mundo')

import {getUsers} from './users';
import login from './login';
import "jquery";
//import loggedin from './loggedin';


//Otra forma de ponerlo, ! indica que no es nulo
//document.getElementById('loginButton')!.addEventListener();


(<HTMLElement>document.getElementById('loginButton')).addEventListener('click', function(e){
    e.preventDefault();

    let username:string = (<HTMLInputElement>document.getElementById('username')).value;
    let password:string = (<HTMLInputElement>document.getElementById('password')).value;

    login(getUsers()[0], {username, password});
});

//Check if logged in
//loggedin();

//console.log(getUsers());
//login();
//login(getUsers()[0]);

//console.log($('#loginButton'));