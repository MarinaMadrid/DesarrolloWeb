import {User} from './users'
import loggedIn from './loggedin';

export default function(dbUser:User, formInfo:{username:string, password:string}){
    //console.log('Hola');
    //console.log(formInfo);

    if(formInfo.username === dbUser.username){

        if(formInfo.password === dbUser.password){

            localStorage.setItem('username', formInfo.username);

            loggedIn();

        } else {
            return;
        }
    } else {
        return;
    }
}