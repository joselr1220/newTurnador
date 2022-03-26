import { Injectable } from "@angular/core";

@Injectable()
export class Globals{
    agencia: string;

    constructor(){

    }

    setAgencia(agencia) {
        localStorage.setItem('agencia', JSON.stringify( agencia));
      }
    
      getAgencia(): any {
        return JSON.parse(localStorage.getItem('agencia'));
      }

      setUsuarioApli(usuario) {
        localStorage.setItem('usuario', JSON.stringify( usuario));
      }
    
      getUsuarioApli(): any {
        return JSON.parse(localStorage.getItem('usuario'));
      }

      setToken(token) {
        localStorage.setItem('token', JSON.stringify( token));
      }
    
      getToken(): any {
        return JSON.parse(localStorage.getItem('token'));
      }

      setRol(rol) {
        localStorage.setItem('rol', JSON.stringify(rol));
      }
    
      getRol(): any {
        return JSON.parse(localStorage.getItem('rol'));
      }

      setLogueado(logueo) {
        localStorage.setItem('logueo', JSON.stringify(logueo));
      }
    
      getLogueado(): any {
        return JSON.parse(localStorage.getItem('logueo'));
      }
}
