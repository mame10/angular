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
import { TableComponent } from './components/table/table.component';
import { ListecatalogueComponent } from './components/listecatalogue/listecatalogue.component';
import { CatologueComponent } from './pages/catologue/catologue.component';
import { BurgerComponent } from './components/burger/burger.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    CardComponent,
    PanierComponent,
    DetailsComponent,
    DetailcommandeComponent,
    MescommandesComponent,
    TableComponent,
    ListecatalogueComponent,
    CatologueComponent,
    BurgerComponent,
    MenuComponent 
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    LayoutModule,
    RouterModule,
  ]
})
export class ClientModule { }
