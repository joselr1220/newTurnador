import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController, Platform, ToastController } from '@ionic/angular';
import { Globals } from 'src/app/Globals/globals';
import { User } from 'src/app/models/User';
import { LoginService } from 'src/app/services/Authentication/loginService';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  rolSemaforista: boolean = false;
  user: User = new User();
  constructor(
    public toastController: ToastController,
    public loadingController: LoadingController,
    private httpLogin: LoginService,
    public nav: NavController,
    private platform: Platform,
    public globals: Globals) {
     
   }

  ionViewWillEnter() {
    /*this.httpLogin.getToken().then(() => {
      if(this.httpLogin.isLogueado) {
        this.nav.navigateRoot('/tabs');
      }
    });*/
  }


  ngOnInit() {
    //this.getUser();

  }

 /*  ionViewWillEnter() {
    this.getUser();
  } */

  /* getUser(){
    this.storage.get("NOMBRE_USUARIO").then(
      val =>{
        if(val != null && val != "" && val != undefined){
          this.nav.navigateRoot("/tabs");
        }else{
          this.rolSemaforista = false;
        }
      }
    );
  } */

  async Toast(msj) {
    const toast = await this.toastController.create({
      message: msj,
      duration: 2000,
      color: "danger"
    });
    toast.present();
  }

  async Login(user){
    if (user.pais == ""){
      user.pais = 'JA'
    }
    const loading = await this.loadingController.create({
      message: 'Cargando'
    });
    loading.present();

    this.httpLogin.login(user).subscribe(
      (res: any) => {
        console.log(res)
        this.globals.agencia = res.data.usuario.C_AGE_TRABAJO;
        this.globals.setAgencia(res.data.usuario.C_AGE_TRABAJO);
        this.globals.setUsuarioApli(res.data.usuario.USUARIO_APLICATIVO);
        if (res.success){
          let rol = res.data.roles.map(roles =>{
            return roles.DESCRIPCION_ROL
          });
          
          for(let i = 0; i < rol.length; i++){
            if (rol[i] == "SEMAFORISTA TRIBAL"){
              this.rolSemaforista = true;
              loading.dismiss();
              //this.nav.navigateRoot("/tabs");
            } else if(rol[i] == "ADMIN TRN TRIBAL"){
              console.log('ADMIN TRN TRIBAL');
              if (this.platform.is('desktop')) {
                console.log('NAVEGADOR')
                this.nav.navigateRoot('/kanban-web');
              }else{
                this.nav.navigateRoot('/tabs');
              }
              return
            }

          } 

          if (!this.rolSemaforista){
            this.Toast("El usuario "+res.data.usuario.NOMBRE_USUARIO+" no tiene acceso por que no tiene el rol de SEMAFORISTA");
            loading.dismiss();
          }

        }else{
          this.Toast(res.message);
          loading.dismiss();
        }        
      },
      err => {
        this.Toast("Ha ocurrido un error con la red!");
        loading.dismiss();
      },
      () =>{
        loading.dismiss();
        if(this.rolSemaforista){
          if (this.platform.is('desktop')) {
            this.Toast("Usted no tiene acceso a la vista web");
            return
          }
          this.nav.navigateRoot('/tabs');
        }
      }
    )

  }
}
