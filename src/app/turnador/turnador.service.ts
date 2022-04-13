import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Variables } from "src/environments/variables";
import { environment } from "src/environments/environment";

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class TurnadorService {

  constructor(
    private http: HttpClient,
    private variables: Variables
  ) { }

    TraerVendedores(agencia){
      // const age = "X3P3M";
      // const agen = JSON.parse("X3P3M");
      return this.http.get(`${this.variables.MEC_EXTENSION_TURNADOR}${apiUrl}/${this.variables.c_emp}/turnos/`+agencia);
    }

    gestionarTurno(agencia, estado, vendedor){
      return this.http.get(`${this.variables.MEC_EXTENSION_TURNADOR}${apiUrl}/${this.variables.c_emp}/gestionar/${agencia}/${estado}/${vendedor}`);
    }

}
