import { Component, Input, OnInit } from '@angular/core';
import { Produit } from 'src/app/shared/models/produit';

@Component({
  selector: 'app-listecatalogue',
  templateUrl: './listecatalogue.component.html',
  styleUrls: ['./listecatalogue.component.css']
})
export class ListecatalogueComponent implements OnInit {
  @Input()  produits:Produit[]|undefined=[]
  constructor() { }

  ngOnInit(): void {
  }

}
