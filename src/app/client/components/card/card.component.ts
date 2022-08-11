import { Component, Input, OnInit } from '@angular/core';
import { PanierService } from 'src/app/shared/services/panier.service';
import { Produit } from '../../../shared/models/produit';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() produit!: Produit;
  constructor(private serpanier:PanierService) { }
  item$=this.serpanier.items$

  ngOnInit(): void {
  }

  Cataloguepanier(produit:Produit){
    produit.quantite=1
    this.serpanier.addToPanier(produit)
  }
}
