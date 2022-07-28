import { Component, OnInit } from '@angular/core';
import { Catalogue } from 'src/app/shared/models/catalogue';
import { CatalogueStoreService } from 'src/app/shared/services/catalogue.store.service';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css']
})
export class BurgerComponent implements OnInit {

   // catalogue$: Observable<Catalogue> | null = null
   catalogue : Catalogue|null=null
   constructor(private serv:CatalogueStoreService) { }
 
   ngOnInit(): void {
     this.serv.all().subscribe((data) => this.catalogue = data)
     // this.catalogue$= this.serv.all()
 
   }

}
