import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Variables } from "src/environments/variables";

@Injectable({
  providedIn: 'root'
})
export class TurnadorService {

  constructor(
    private http: HttpClient,
    private variables: Variables
  ) { }

    TraerVendedores(agencia){
      return this.http.get(`${this.variables.dirLocal}/${this.variables.c_emp}/turnos/${agencia}`);
    }

    gestionarTurno(agencia, estado, vendedor){
      return this.http.get(`${this.variables.dirLocal}/${this.variables.c_emp}/gestionar/${agencia}/${estado}/${vendedor}`);
    }

}
