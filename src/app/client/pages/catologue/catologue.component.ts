import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Catalogue } from 'src/app/shared/models/catalogue';
import { Produit } from 'src/app/shared/models/produit';
import { CatalogueStoreService } from 'src/app/shared/services/catalogue.store.service';
import { PanierService } from 'src/app/shared/services/panier.service';


@Component({
  selector: 'app-catologue',
  templateUrl: './catologue.component.html',
  styleUrls: ['./catologue.component.css']
})
export class CatologueComponent implements OnInit {
  // catalogue$: Observable<Catalogue> | null = null
  catalogue : Catalogue|null=null
  constructor(private serv:CatalogueStoreService,public router:Router) { }
  
  ngOnInit(): void {
    this.serv.all().subscribe((data) => this.catalogue = data)
    // this.catalogue$= this.serv.all()

  }

  
}
