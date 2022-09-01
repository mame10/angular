import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { HeaderadminComponent } from './headeradmin/headeradmin.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HeaderadminComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
  ]
})
export class LayoutModule { }
