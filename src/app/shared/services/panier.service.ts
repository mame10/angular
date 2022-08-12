import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, take, map } from 'rxjs';
import { Produit } from '../models/produit';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  panier: Produit[] = []
  constructor(private router: Router) {
    let panier = JSON.parse(localStorage.getItem('produits') || 'null');
    if (!panier) {
      panier = [];
    }
    this.itemsSubject.next(panier);
  }
  private itemsSubject = new BehaviorSubject<any[]>([]);
  items$ = this.itemsSubject.asObservable();

  isExistProduit(produit: any, id: number) {
    return produit.find((pro: any) => {
      return pro.id === id;
    });
  }

  addToPanier(product: any) {
    this.items$.pipe(
      take(1),
      map((produits) => {
        if (!this.isExistProduit(produits, product.id)) {
          product.quantite = 1
          produits.push(product);
        }
        else {
          produits.forEach((element: any) => {
            element.quantite=Number(element.quantite)
            element.quantite += 1
          });
        }
        localStorage.setItem('products', JSON.stringify(produits));
      }),
    ).subscribe();
  }

  removeFromCart(product: any) {
    this.items$.pipe(
      take(1),
      map((produits) => {

        if (produits.includes(product)) {
          const qte = produits.find((qte: { id: number }) => qte.id == product.id);
          if (qte) {
            let index = produits.findIndex((qte: any) => qte.id == product.id);
            produits.splice(index, 1)
            localStorage.setItem('produits', JSON.stringify(produits));
          }
        }

      }),
    ).subscribe();
  }

  increment(product:Produit,quantite :any){
    this.items$.pipe(
      take(1),
      map((products) => {
        products.forEach((element:any) =>{
          if(element.id === product.id){
            element.quantite=quantite;
          }
        });
        localStorage.setItem('produit', JSON.stringify(products));
      })
    )
    .subscribe();
  }

  PricePanier(){
    let tab=0
    this.items$.pipe(
      map((produits) => {
        produits.forEach((element:any) =>{
          tab+=(element.prix * element.quantite)
        });
        localStorage.setItem('produit', JSON.stringify(produits));
      })
    ).subscribe();
    return tab
  }
}