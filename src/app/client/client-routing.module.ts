import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatologueComponent } from './pages/catologue/catologue.component';
import { DetailcommandeComponent } from './pages/detailcommande/detailcommande.component';
import { DetailsComponent } from './pages/details/details.component';
import { MescommandesComponent } from './pages/mescommandes/mescommandes.component';
import { PanierComponent } from './pages/panier/panier.component';

const routes: Routes = [
  {path:'', component:CatologueComponent},
  {path:'client/details/id', component:DetailsComponent},
  {path:'client/panier', component:PanierComponent},
  {path:'client/mescommandes', component:MescommandesComponent},
  {path:'client/detailcommande/id', component:DetailcommandeComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
