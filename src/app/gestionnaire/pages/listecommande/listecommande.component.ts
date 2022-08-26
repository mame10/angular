import { Component, OnInit } from '@angular/core';
import { CommandeService } from 'src/app/shared/services/commande.service';

@Component({
  selector: 'app-listecommande',
  templateUrl: './listecommande.component.html',
  styleUrls: ['./listecommande.component.css']
})
export class ListecommandeComponent implements OnInit {
listcommande: any[] = []
date: any;
pagination:number=1
filter: string = ''
  constructor(private service:CommandeService) { }

  ngOnInit(): void { 
    this.service.allCommandes().subscribe(
      data =>{
        // console.log(data);
        this.listcommande = data
        // console.log(this.listcommande);  
      }
    )

    this.service.getCommandes(1).subscribe(
      data =>{
      console.log(data);
      }
    )

  }
}
