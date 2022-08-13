import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecuriteRoutingModule } from './securite-routing.module';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    InscriptionComponent
  ],
  imports: [
    CommonModule,
    SecuriteRoutingModule,
    FormsModule 
  ]
})
export class SecuriteModule { }
