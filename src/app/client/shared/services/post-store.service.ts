import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Post } from "../models/post";
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
  })
export class PostStoreService{
    private url:string = "http://localhost:3000/posts"

    constructor(private http:HttpClient) { }
  
    all():Observable<Post[]> {
      return this.http.get<Post[]>(this.url)
    }

    post$ = (id:number) => {
        return this.http.get<Post>(`${this.url}/${id}`)
      }
}