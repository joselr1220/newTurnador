import { Component } from '@angular/core';
import { TurnadorService } from '../turnador/turnador.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  
  nombres:any;

  constructor(
    private httpTurnador: TurnadorService
  ) {}

    getVendedores(){
      this.httpTurnador.TraerVendedores().subscribe(
        resp => {
          this.nombres = resp;
          console.log(this.nombres);
        },
        error => {
          console.log(error);
        }
      ); 
    }


}
