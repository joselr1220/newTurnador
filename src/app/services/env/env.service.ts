import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class EnvService {

  //CONSTANTES PRD
  SERVER_URL_PRD = "https://appsprd.mueblesjamar.com.co/";
  SERVER_URL_QAS = "https://appsprd.mueblesjamar.com.co/";
  SERVER_URL_DEV = "http://appsprd.mueblesjamar.com.co/";
  API_KEY = "d47c29cfdf8e2456ac678c51f9e4ddfa8ec577f64e98aa9e863399f6a10210d4";


  //VARIABLES
  agencia: any;
  nombreUsuario: any;
  usuarioAplicativo: any;
  dep_age: any;
  rol_admin: any;

  constructor(
    public toastController: ToastController,
  ) { }

  async Toast(msj, color) {
    const toast = await this.toastController.create({
      message: msj,
      duration: 3000,
      color: color,
      position: "middle"
    });
    toast.present();
  }

  getStorageToken(){
    /*return this.storage.get('token')
    .then(
      (data: UserResponse) =>{
         this.agencia = data.data.usuario.C_AGE_TRABAJO;
         this.nombreUsuario = data.data.usuario.NOMBRE_USUARIO;
         this.usuarioAplicativo = data.data.usuario.USUARIO_APLICATIVO;
         this.dep_age = data.data.usuario.DEP_AGE;
         this.rol_admin = data.data.roles.find((roles) => roles.DESCRIPCION_ROL == 'ADMIN TRN TRIBAL')
      },
      error => {
        console.error(error);
        this.Toast(error, "danger")
      } 
    );
  }*/
}}
