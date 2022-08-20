import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionnaireRoutingModule } from './gestionnaire-routing.module';
import { StatistiquesComponent } from './pages/statistiques/statistiques.component';
import { ListecommandeComponent } from './pages/listecommande/listecommande.component';
import { LayoutModule } from '../layout/layout.module';
import { FormsModule } from '@angular/forms';
import {Ng2SearchPipeModule} from 'ng2-search-filter'
import { FilterPipe } from '../shared/services/filter.pipe';
import { ListelivreurComponent } from './pages/listelivreur/listelivreur.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    StatistiquesComponent,
    ListecommandeComponent,
    FilterPipe,
    ListelivreurComponent
  ],
  imports: [
    CommonModule,
    GestionnaireRoutingModule,
    LayoutModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule

  ]
})
export class GestionnaireModule { }
