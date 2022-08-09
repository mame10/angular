import { Component, Input, OnInit } from '@angular/core';
import { PanierService } from 'src/app/shared/services/panier.service';
import { Produit } from '../../../shared/models/produit';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() produit : Produit|null = null;

  constructor(private serpanier:PanierService) { }

  ngOnInit(): void {
  }

  Cataloguepanier(produit:Produit){
    this.serpanier.addToPanier(produit)
  }
}
