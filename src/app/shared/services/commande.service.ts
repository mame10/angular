import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
private url:string = 'http://127.0.0.1:8000/api/commandes'
private urlclient:string = 'http://127.0.0.1:8000/api/users'
  constructor(private http:HttpClient,private token : TokenService) { }
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': `Bearer ${this.token.getToken()}`,
    })
  }
  allCommandes():Observable<any>{
    // console.log(this.token.getToken());
    return  this.http.get<any>(this.url,this.httpOptions).pipe( 
      map(
        data =>{
          let datas=data['hydra:member']
          return datas
        }
        ))
      }
      
    getCommandes(client_id:any){
    return this.http.get<any>(this.urlclient +"/"+ client_id + '/commandes').pipe(
        map( data => {
          // console.log(data);
          
          let datas=data["hydra:member"]
          console.log(datas);   
          return datas
        })
    ) 
  }
}
