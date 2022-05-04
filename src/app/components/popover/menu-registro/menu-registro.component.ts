import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/Authentication/loginService';
import { Router } from '@angular/router';
import { PopoverController, AlertController, ToastController, NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu-registro',
  templateUrl: './menu-registro.component.html',
  styleUrls: ['./menu-registro.component.scss'],
})
export class MenuRegistroComponent implements OnInit {

  constructor(
    public router: Router,
    public popoverController: PopoverController,
    public nav: NavController,
    public menuCtrl: MenuController,
    public alertController: AlertController,
    private toastController: ToastController,
    private httpLogin: LoginService,

  ) { }

  ngOnInit() {}
  cerrarSession(){
    this.httpLogin.logout().then(
      resp =>{
        this.popoverController.dismiss();
        console.log("Logout");
        //this.authService.logout();
        this.menuCtrl.close();
      }
    )
  }
 

}
