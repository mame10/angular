import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject,take,map } from 'rxjs';
import { Produit } from '../models/produit';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  panier:Produit[]=[]
  totalAmount=0;
  constructor(private router:Router) {
    let panier = JSON.parse(localStorage.getItem('produits') || 'null');
    if (!panier) {
      panier = [];
    }
    this.itemsSubject.next(panier);
  }

  private itemsSubject = new BehaviorSubject<any[]>([]);
  items$ = this.itemsSubject.asObservable();

  addToPanier(product: any) {
    this.items$.pipe(
      take(1),
      map((produits) => {
        produits.push(product);
        localStorage.setItem('products', JSON.stringify(produits));
      }),
    ).subscribe();
  }

 
  removeFromCart(product: any) {
    this.items$.pipe(
      take(1),
      map((produits) => {
        
        if(produits.includes(product)){
          const qte=produits.find((qte:{id: number})=>qte.id==product.id);
          if(qte){
            let index=produits.findIndex((qte:any)=>qte.id==product.id);
            produits.splice(index,1)
            localStorage.setItem('produits', JSON.stringify(produits));
          }
        }
        
      }),
    ).subscribe();
  }

}