import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from '../../shared/models/produit';
import { ProduitStoreService } from '../../shared/services/produit.store.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  produits$: Observable<Produit[]> | null = null;
  constructor(private serv: ProduitStoreService) { }

  ngOnInit(): void {
    this.produits$ = this.serv.all();
  }
}
