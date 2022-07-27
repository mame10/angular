import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from '../../shared/models/produit';
import { ProduitStoreService } from '../../shared/services/produit.store.service';

@Component({
  selector: 'app-catologue',
  templateUrl: './catologue.component.html',
  styleUrls: ['./catologue.component.css']
})
export class CatologueComponent implements OnInit {


  produits$ : Observable<Produit[]> | null = null;
  constructor(private serv:ProduitStoreService) { }

  ngOnInit(): void {
    this.produits$ = this.serv.all();
  }
}
