import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Produit } from 'src/app/shared/models/produit';
import { CatalogueStoreService } from 'src/app/shared/services/catalogue.store.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
@Input() produit : Produit|null = null; 
  produit$:Observable<any>|undefined=undefined
  constructor(private serv :CatalogueStoreService,private routes:ActivatedRoute) { }
  
    ngOnInit(): void {
      const detailurl=this.routes.snapshot.params['id']
      this.produit$=this.serv.produit(detailurl)
      this.serv.produit(detailurl).subscribe()
      
    } 
}
