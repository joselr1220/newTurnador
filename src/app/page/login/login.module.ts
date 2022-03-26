import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginPage } from './login.page';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Globals } from 'src/app/Globals/globals';

@NgModule({
  declarations: [LoginPage],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [FormBuilder, Globals]
})
export class LoginModule { }
