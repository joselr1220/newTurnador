
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { EnvService } from '../services/env/env.service';
import { IntegracionDigiturnoService } from '../services/integracionDigiturno/integracion-digiturno.service'
import { AlertController, PopoverController, ToastController, LoadingController, Platform, NavController } from '@ionic/angular';
import { Globals } from '../Globals/globals';
// import { MenuAdminComponent } from '../components/popover/menu-admin/menu-admin/menu-admin.component';
// import { MenuRegistroComponent } from '../components/popover/menu-registro/menu-registro.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
public idOficina: any;
public idSala: any;
public agencia: string;
public idSelector: any;
public credito_caja: any;
rol =  this.httpEnv.rol_admin;
  constructor(
    public router: Router,
    public alertController: AlertController,
    private httpEnv: EnvService,
    private integracion : IntegracionDigiturnoService,
    public popoverController: PopoverController,
    public globals: Globals

  ) {

    this.agencia = this.globals.getAgencia();
  }

  ngOnInit() {

    this.cargarDatos()
  }

  async Espere(){
    const alert = await this.alertController.create({
      message: 'Generando información de turnos, por favor espere unos segundos!',
      mode: 'ios',
      cssClass: 'css_alert',
      buttons: [
        {
          text: 'Aceptar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            this.popoverController.dismiss();
          }
        }
      ]
    });
    await alert.present();
  }

    

    public irDigiturno() {
      this.cargarDatos();
      const urlRedirect: string = `http://10.1.0.135:8860/Player.aspx?Recurso=TouchJamar&IdOficina=${this.idOficina}&IdSelector=${this.idSelector}&IdSala=${this.idSala}&fullscreen=1`;
      const urlcaja: string= `http://10.1.0.135:8840/Player.aspx?Recurso=TouchJamar&IdOficina=${this.idOficina}&IdSelector=${this.idSelector}&IdSala=${this.idSala}&fullscreen=1`;
      console.log('Entrando al digiturno')
      console.log('Este es el valor del credito caja: ', this.credito_caja)
      location.href = urlRedirect;
      if(this.idOficina == null){
        this.Espere();
        console.log('Cargando')
      }else if(this.credito_caja == 'S'){
       // this.iab.create(urlRedirect, '_self');
      }else{
        //this.iab.create(urlcaja, '_self');
      }
      
      console.log('Url', urlRedirect) 
    }
        
  private cargarDatos() {
    console.log(this.httpEnv.agencia);
    console.log(this.globals.agencia);
    this.integracion.obtenerDatos(this.agencia).subscribe({
      next: (data: any) => {
        console.log('Datos ids: ', data.data[0]);
        this.idOficina = data.data[0].id_oficina;
        this.idSala = data.data[0].id_sala;
        this.idSelector = data.data[0].id_selector;
        this.credito_caja = data.data[0].aplica_credito_caja;
      },
      error: error => {
        console.log(`Error! ${error}`);
      }
    });
  }

    // async PopoverMenu(ev: any) {
    //   const popover = await this.popoverController.create({
    //     component: this.rol ? MenuAdminComponent : MenuRegistroComponent,
    //     event: ev
    //   });
    //   return await popover.present();
    // }

    tab1(){
      this.router.navigate(['tabs/tab1'])
    }

    tab2(){
      this.router.navigate(['tabs/tab2'])
    }

    atencion(){
      this.router.navigate(['tabs/atencion'])
    }
    
    tab5(){
      this.router.navigate(['tabs/tab5'])
    }

    informacion(){
      this.router.navigate(['tabs/informacion'])
    }

    kanban(){
      this.router.navigate(['tabs/kanban'])
    }


}
