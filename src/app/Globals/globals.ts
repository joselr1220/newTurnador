import { Injectable } from "@angular/core";

@Injectable()
export class Globals{
    agencia: string;

    constructor(){

    }
    
    setAgencia(agencia) {
        localStorage.setItem('agencia', agencia);
      }
    
      getAgencia(): any {
        return localStorage.getItem('agencia');
      }

      setUsuarioApli(usuario) {
        localStorage.setItem('usuario',usuario);
      }
    
      getUsuarioApli(): any {
        return localStorage.getItem('usuario');
      }

      setToken(token) {
        localStorage.setItem('token', token);
      }
    
      getToken(): any {
        return localStorage.getItem('token');
      }

      setRol(rol) {
        localStorage.setItem('rol', rol);
      }
    
      getRol(): any {
        return localStorage.getItem('rol');
      }

      setLogueado(logueo) {
        localStorage.setItem('logueo',logueo);
      }
    
      getLogueado(): any {
        return localStorage.getItem('logueo');
      }
}
