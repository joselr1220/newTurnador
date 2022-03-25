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
}
