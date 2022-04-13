import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/Authentication/loginService';
import { Router } from '@angular/router';
import { PopoverController, AlertController, ToastController, NavController, MenuController } from '@ionic/angular';
import { Globals } from 'src/app/Globals/globals';
// import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.scss'],
})
export class MenuAdminComponent implements OnInit {
  token: string;
  constructor(
    public router: Router,
    public popoverController: PopoverController,
    // private callNumber: CallNumber,
    public nav: NavController,
    public menuCtrl: MenuController,
    public alertController: AlertController,
    private toastController: ToastController,
    private httpLogin: LoginService,
    public globals: Globals
  ) {
      this.token = this.globals.getToken();
   }

  ngOnInit() { }

  async Toast(msj: string, color: string) {
    const toast = await this.toastController.create({
      message: msj,
      duration: 3000,
      color: color
    });
    toast.present();
  }
  cerrarSession() {
    this.httpLogin.logout().then(
      resp => {
        this.popoverController.dismiss();
        console.log("Logout");
        //this.authService.logout();
        this.menuCtrl.close();
        this.nav.navigateRoot("");
      }
    )
  }

}
