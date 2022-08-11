import { Component, OnInit } from '@angular/core';
import { PanierService } from 'src/app/shared/services/panier.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  items$=this.service.items$
  constructor(private service:PanierService) { }

  ngOnInit(): void {
  }

}
