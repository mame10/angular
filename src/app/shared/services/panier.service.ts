import { Injectable } from '@angular/core';
import { BehaviorSubject,take,map } from 'rxjs';
import { Produit } from '../models/produit';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  panier=[]
  constructor() {
    let existingCartItems = JSON.parse(localStorage.getItem('produits')|| 'null');
    if (!existingCartItems) {
      existingCartItems = [];
    }
    this.itemsSubject.next(existingCartItems);
  }

  private itemsSubject = new BehaviorSubject<Produit[]>([]);
  items$ = this.itemsSubject.asObservable();

  addToPanier(product: Produit) {
    this.items$.pipe(
      take(1),
      map((produits) => {
        produits.push(product);
        localStorage.setItem('products', JSON.stringify(produits));
      }),
    ).subscribe();
  }
}