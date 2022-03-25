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

    async gestionarTurno(tipoBoton, agencia, estado, numIde){
      //aqui va el código que actualiza los turnos
      if(tipoBoton == 0 && estado == 1){
        estado = 'HIBERNAR';
    
      }
      else if(tipoBoton == 1){
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


}
