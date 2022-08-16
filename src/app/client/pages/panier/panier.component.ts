import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/shared/models/produit';
import { PanierService } from 'src/app/shared/services/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  price=0
 
  constructor(private service:PanierService) { }
  items$=this.service.items$

  ngOnInit(): void {
    this.montantTotal()
  
  }

  removeFromCart(produit: any){
    this.service.removeFromCart(produit)
  }

  quantitePrice(product:Produit,qte: any){
    this.service.increment(product,qte)
   }

   montantTotal(){
    return this.price=this.service.PricePanier()
   }
}
