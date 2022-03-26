import { Component } from '@angular/core';
import { AlertController, PopoverController } from '@ionic/angular';
import { Globals } from '../Globals/globals';
import { EnvService } from '../services/env/env.service';
import { TurnadorService } from '../turnador/turnador.service';
import { MenuAdminComponent } from 'src/app/components/popover/menu-admin/menu-admin/menu-admin.component';
import { MenuRegistroComponent } from 'src/app/components/popover/menu-registro/menu-registro.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  nombres:any;
  usuario: string;
  rol: string;
  public agencia: string;
  hora_actual: string;
  fechaActual: Date = new Date();
  constructor(
    private httpTurnador: TurnadorService,
    public alertController: AlertController,
    public popoverController: PopoverController,
    private httpEnv: EnvService,    
    public globals: Globals) {
      this.agencia = this.globals.getAgencia();
      this.usuario = this.globals.getUsuarioApli();
      this.rol = this.globals.getRol();
    }

  ngOnInit() {
    this.getVendedores();
    this.calcularHora();
  }

  //   doRefresh(event) {
  //   setTimeout(() => {
  //     this.getToken();
  //     event.target.complete();
  //   }, 2000);
  // }

  // getToken() {
  //   this.httpEnv.getStorageToken().then(
  //     // () => {
  //     //   this.rol = this.httpEnv.rol_admin
  //     //   this.age_trabajo = this.httpEnv.agencia;
  //     //   this.usuario_creacion = this.httpEnv.usuarioAplicativo;
  //       // this.getVendEnAtencion(this.httpEnv.agencia);
  //    );
  // }

  calcularHora() {
    setTimeout(() => {
      this.calcularHora();
      this.hora_actual = new Date().toLocaleTimeString('en-US');
    }, 1000);
  }

    async getVendedores(){
      this.httpTurnador.TraerVendedores(this.agencia).subscribe(
        resp => {
          this.nombres = resp;
          console.log(this.nombres);
        },
        error => {
          console.log(error);
        }
      ); 
    }

    async gestionarTurno(tipoBoton, agencia, estado, numIde, nombre){
      //aqui va el código que actualiza los turnos
      if(tipoBoton == 0 && estado == 1){
        estado = 'HIBERNAR';
    
      }
      else if(tipoBoton == 1){
        if(estado == null){
          estado = 'TURNO';
        }
        if(estado == 0){
          estado = 'TURNO';
        }
        if(estado == 1){
            estado = 'ATENCION';
        }
        if(estado == 2){
          estado = 'TURNO';
        }
        if(estado == 3){
            estado = 'TURNO';
        }
      }
     
     
      this.httpTurnador.gestionarTurno(agencia, estado, numIde).subscribe(
        respuesta => {
          this.nombres = respuesta;
          console.log('Turno gestionado');
          this.getVendedores();
        },
        error => {
          console.log(error);
        }
      )
      
      //traigo nuevamente los vendedores y sus posiciones
     
    }

    async iniciarTurno(tipoBoton, agencia, estado, numIde, nombre) {
      if (tipoBoton === 0 && estado == 1){
        const alert = await this.alertController.create({
          header: "Iniciar Hibernación!",
          message: "Desea hibernar a " + nombre + "?",
          mode: "ios",
          cssClass: "css_alert",
          buttons: [
            {
              text: "No",
              role: "cancel",
              cssClass: "secondary",
              handler: (blah) => {
                console.log("Confirm Cancel: blah");
              },
            },
            {
              text: "Si",
              handler: () => {
                this. gestionarTurno(tipoBoton, agencia, estado, numIde, nombre);
              },
            },
          ],
        });
        await alert.present();
      }else if(tipoBoton === 1 && estado == 1){
        const alert = await this.alertController.create({
          header: "Iniciar Atención!",
          message: "Desea iniciar la atención de " + nombre + "?",
          mode: "ios",
          cssClass: "css_alert",
          buttons: [
            {
              text: "No",
              role: "cancel",
              cssClass: "secondary",
              handler: (blah) => {
                console.log("Confirm Cancel: blah");
              },
            },
            {
              text: "Si",
              handler: () => {
                this. gestionarTurno(tipoBoton, agencia, estado, numIde, nombre);
              },
            },
          ],
        });
        await alert.present();
      }else if(tipoBoton === 1 && estado == 0){
        const alert = await this.alertController.create({
          header: "Registrar Llegada!",
          message: "Desea registrar la llegada de " + nombre + "?",
          mode: "ios",
          cssClass: "css_alert",
          buttons: [
            {
              text: "No",
              role: "cancel",
              cssClass: "secondary",
              handler: (blah) => {
                console.log("Confirm Cancel: blah");
              },
            },
            {
              text: "Si",
              handler: () => {
                this. gestionarTurno(tipoBoton, agencia, estado, numIde, nombre);
              },
            },
          ],
        });
        await alert.present();
      }else if(tipoBoton === 1 && estado == 2 || estado == 3){
        const alert = await this.alertController.create({
          header: "Iniciar espera!",
          message: "Desea ingresar en la cola de espera a " + nombre + "?",
          mode: "ios",
          cssClass: "css_alert",
          buttons: [
            {
              text: "No",
              role: "cancel",
              cssClass: "secondary",
              handler: (blah) => {
                console.log("Confirm Cancel: blah");
              },
            },
            {
              text: "Si",
              handler: () => {
                this. gestionarTurno(tipoBoton, agencia, estado, numIde, nombre);
              },
            },
          ],
        });
        await alert.present();
      }else if(tipoBoton === 1 && estado == null){
        const alert = await this.alertController.create({
          header: "Registrar Llegada!",
          message: "Desea registrar la llegada de " + nombre + "?",
          mode: "ios",
          cssClass: "css_alert",
          buttons: [
            {
              text: "No",
              role: "cancel",
              cssClass: "secondary",
              handler: (blah) => {
                console.log("Confirm Cancel: blah");
              },
            },
            {
              text: "Si",
              handler: () => {
                this. gestionarTurno(tipoBoton, agencia, estado, numIde, nombre);
              },
            },
          ],
        });
        await alert.present();
      }
    }

    async PopoverMenu(ev: any) {
      const popover = await this.popoverController.create({
        
        component: this.rol ? MenuAdminComponent : MenuRegistroComponent,
        event: ev
      });
      return await popover.present();
    }

}
