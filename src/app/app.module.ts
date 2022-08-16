import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientModule } from './client/client.module';
import { ProduitStoreService } from './shared/services/produit.store.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { CatalogueStoreService } from './shared/services/catalogue.store.service';
import { SecuriteModule } from './securite/securite.module';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ClientModule,
    HttpClientModule,
    SecuriteModule
  ],
  providers: [ProduitStoreService,CatalogueStoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
