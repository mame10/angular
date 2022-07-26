import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from './client-routing.module';
import { CardComponent } from './components/card/card.component';
import { PanierComponent } from './pages/panier/panier.component';
import { DetailsComponent } from './pages/details/details.component';
import { DetailcommandeComponent } from './pages/detailcommande/detailcommande.component';
import { MescommandesComponent } from './pages/mescommandes/mescommandes.component';
import { LayoutModule } from '../layout/layout.module';
import { RouterModule } from '@angular/router';
import { CatologueComponent } from './pages/catologue/catologue.component';
import { MenuComponent } from './components/menu/menu.component';
import { BurgerComponent } from './components/burger/burger.component';



@NgModule({
  declarations: [
    CardComponent,
    PanierComponent,
    DetailsComponent,
    DetailcommandeComponent,
    MescommandesComponent,
    CatologueComponent,
    MenuComponent,
    BurgerComponent,

  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    LayoutModule,
    RouterModule,
   
  ]
})
export class ClientModule { }
