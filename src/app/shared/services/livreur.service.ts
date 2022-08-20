import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class LivreurService {

private url :string= 'http://localhost:8000/api/livreurs'
  constructor(private http:HttpClient, private token: TokenService) {
   }
   private httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': `Bearer ${this.token.getToken()}`,
    })
  }
   
  getLivreur(): Observable<any>{
    return this.http.get<any>(this.url,this.httpOptions).pipe(
     map( 
      data => {
        let datas=data['hydra:member']
        return datas
      }
    ))
  }
}
