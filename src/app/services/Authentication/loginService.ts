import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from  'rxjs/operators';
import { Observable, BehaviorSubject } from  'rxjs';

import { EnvService } from '../env/env.service';
import { Globals } from 'src/app/Globals/globals';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLogueado: boolean = false;
  token: any;

  constructor(
    private  http: HttpClient, 
    private httpEnv: EnvService,
    public globals: Globals
  ) { }

  login(params) {
    let headers = new HttpHeaders(
      {
        // 'Accept': 'application/json',
        'Content-Type' : 'application/x-www-form-urlencoded'
      });
      
      let options = {
        headers: headers
      }

      return this.http.post(this.httpEnv.SERVER_URL_PRD+'MenuService/api/usuarios/login', "c_emp="+params.pais+"&api_key="+this.httpEnv.API_KEY+"&usuario_aplicativo="+params.usuario+"&clave_aplicativo="+params.password, options).pipe(
        tap(token => {
         /* this.storage.set('token', token).then(
            () =>{
              console.log("token guardado");
              console.log(token);
            },
            error => console.log(error)
          );        
          this.token = token;
          this.isLogueado = true;*/
          return token;
        })
      );
  }

  async logout() { 
    //this.storage.remove("token");
    this.globals.setLogueado(false);
    delete this.token;
  }

  getToken() {
    /*return this.storage.get('token').then(
      data => {
        this.token = data;
        if(this.token != null) {
          this.isLogueado=true;
        } else {
          this.isLogueado=false;
        }
      },
      error => {
        this.token = null;
        this.isLogueado=false;
      }
    );*/
  }

}