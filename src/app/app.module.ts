import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { Variables } from 'src/environments/variables';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TurnadorService } from './turnador/turnador.service';
import { HttpClientModule } from '@angular/common/http';
import { Globals } from './Globals/globals';
import { MenuRegistroComponent } from './components/popover/menu-registro/menu-registro.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [AppComponent, MenuRegistroComponent],
  entryComponents: [],
  imports: [CommonModule,BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [TurnadorService, Variables, Globals, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule {}
 