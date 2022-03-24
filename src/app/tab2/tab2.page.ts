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

  ngOnInit() {
    this.getVendedores();
  }

    async getVendedores(){
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

    gestionarTurno(){
      //aqui va el código que actualiza los turnos
      // this.httpTurnador.gestionarTurno(agencia, estado, vendedor);

      //traigo nuevamente los vendedores y sus posiciones
      this.getVendedores();
    }


}
