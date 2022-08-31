import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommandeService } from 'src/app/shared/services/commande.service';
import { TokenService } from 'src/app/shared/services/token.service';

@Component({
  selector: 'app-mescommandes',
  templateUrl: './mescommandes.component.html',
  styleUrls: ['./mescommandes.component.css']
})
export class MescommandesComponent implements OnInit {
// id = localStorage.getItem('id' || '')
  constructor(private service:CommandeService,private routes:ActivatedRoute) { }
  pagination:number=1
  filter: string = ''
  commande: any[] = []
  date: any;

  ngOnInit(): void {
    const detailurl=this.routes.snapshot.params['id']
     this.service.getCommandes(detailurl).subscribe(
      data =>{
        this.commande=data;
        console.log( this.commande); 
      }
    )
  }
}
