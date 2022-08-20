import { Component, OnInit } from '@angular/core';
import { LivreurService } from 'src/app/shared/services/livreur.service';

@Component({
  selector: 'app-listelivreur',
  templateUrl: './listelivreur.component.html',
  styleUrls: ['./listelivreur.component.css']
})
export class ListelivreurComponent implements OnInit {
  liste: any[] = []
  date:any
  filter: string =''
  constructor(private service:LivreurService) { }

  ngOnInit(): void {
    this.service.getLivreur().subscribe(
      data =>{
        // console.log(data);
        this.liste = data
        // console.log(this.listcommande);  
      }
    )
  }

}
