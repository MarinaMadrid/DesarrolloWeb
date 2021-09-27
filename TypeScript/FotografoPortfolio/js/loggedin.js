"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var users_1 = require("./users");
function default_1() {
    if (localStorage.username) {
        //Cambia el botón de inicio de sesión por un saludo
        document.getElementById('loginModalButtonContainer').innerHTML = "<span>Hola, " + users_1.getUsers()[0].username + " </span>";
        //Añade el botón de agregar fotos y cerrar sesión
        document.getElementById('addGalleryItemButtonContainer').innerHTML = "<button class=\"btn btn-primary btn-block\">Agregar foto</button>\n                                                                               <button id='closeSessionButton' class=\"btn btn-danger\">Cerrar sesi\u00F3n</button>";
        //Función del botón de cerrar sesión
        $('#closeSessionButton').on("click", function (e) {
            e.preventDefault();
            localStorage.clear();
            window.location.reload();
        });
    }
}
exports.default = default_1;
