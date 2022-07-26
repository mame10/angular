import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../../shared/models/post';
import { PostStoreService } from '../../shared/services/post-store.service';

@Component({
  selector: 'app-catologue',
  templateUrl: './catologue.component.html',
  styleUrls: ['./catologue.component.css']
})
export class CatologueComponent implements OnInit {


  posts$ : Observable<Post[]> | null = null;
  constructor(private serv:PostStoreService) { }

  ngOnInit(): void {
    this.posts$ = this.serv.all();
  }
}
