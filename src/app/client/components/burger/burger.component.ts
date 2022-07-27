import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from '../../shared/models/produit';
import { ProduitStoreService } from '../../shared/services/produit.store.service';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css']
})
export class BurgerComponent implements OnInit {

  produits$: Observable<Produit[]> | null = null;
  constructor(private serv: ProduitStoreService) { }

  ngOnInit(): void {
    this.produits$ = this.serv.all();
  }
}
