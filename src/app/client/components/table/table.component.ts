import { Component, Input, OnInit } from '@angular/core';
import { Produit } from 'src/app/shared/models/produit';
import { PanierService } from 'src/app/shared/services/panier.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
// @Input() produitPanier:Produit[]=[]
  constructor() { }


  ngOnInit(): void {
  }

}
