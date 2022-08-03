import { Component, Input, OnInit } from '@angular/core';
import { Produit } from 'src/app/shared/models/produit';

@Component({
  selector: 'app-liste-details',
  templateUrl: './liste-details.component.html',
  styleUrls: ['./liste-details.component.css']
})
export class ListeDetailsComponent implements OnInit {
  @Input() details:Produit[]=[]
  constructor() { }

  ngOnInit(): void {
  }

}
