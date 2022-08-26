import { Component, OnInit } from '@angular/core';
import { CommandeService } from 'src/app/shared/services/commande.service';
import { TokenService } from 'src/app/shared/services/token.service';

@Component({
  selector: 'app-mescommandes',
  templateUrl: './mescommandes.component.html',
  styleUrls: ['./mescommandes.component.css']
})
export class MescommandesComponent implements OnInit {
// id = localStorage.getItem('id' || '')
  constructor(private service:CommandeService,private serv:TokenService) { }
  pagination:number=1
  filter: string = ''
  commande: any[] = []

  ngOnInit(): void {
     this.service.getCommandes(1).subscribe(
    )
  }
}
