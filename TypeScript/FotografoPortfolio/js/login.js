"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var loggedin_1 = __importDefault(require("./loggedin"));
function default_1(dbUser, formInfo) {
    //console.log('Hola');
    //console.log(formInfo);
    if (formInfo.username === dbUser.username) {
        if (formInfo.password === dbUser.password) {
            localStorage.setItem('username', formInfo.username);
            loggedin_1.default();
        }
        else {
            return;
        }
    }
    else {
        return;
    }
}
exports.default = default_1;
