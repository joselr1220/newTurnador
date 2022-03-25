import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Variables } from 'src/environments/variables';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class IntegracionDigiturnoService {


  constructor(private http:HttpClient, private variables: Variables) { }




  obtenerDatos(agencia){
    let informacion = {
     agencia: agencia
    }
    console.log('Esta es la agencia: ', agencia);
    return this.http.post<any>(`${this.variables.digiturno}${apiUrl}/devolverids`, informacion)
  }

}