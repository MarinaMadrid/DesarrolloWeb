import {getUsers} from './users';

export default function(){

    if(localStorage.username){
        //Cambia el botón de inicio de sesión por un saludo
        document.getElementById('loginModalButtonContainer')!.innerHTML = `<span>Hola, ${getUsers()[0].username} </span>`;
        
        //Añade el botón de agregar fotos y cerrar sesión
        document.getElementById('addGalleryItemButtonContainer')!.innerHTML = `<button class="btn btn-primary btn-block">Agregar foto</button>
                                                                               <button id='closeSessionButton' class="btn btn-danger">Cerrar sesión</button>`;

        //Función del botón de cerrar sesión
        $('#closeSessionButton').on(`click`, function(e){
            e.preventDefault();

            localStorage.clear();

            window.location.reload();
        })
    }

}