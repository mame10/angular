import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListecommandeComponent } from './pages/listecommande/listecommande.component';
import { ListelivreurComponent } from './pages/listelivreur/listelivreur.component';
import { StatistiquesComponent } from './pages/statistiques/statistiques.component';

const routes: Routes = [
  {path:'commande', component:ListecommandeComponent},
  {path:':/commande', component:ListecommandeComponent},
  {path:'statistique', component: StatistiquesComponent},
  {path:'livreur', component:  ListelivreurComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionnaireRoutingModule { }
