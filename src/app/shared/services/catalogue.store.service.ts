import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Catalogue } from '../models/catalogue';


@Injectable({
  providedIn: 'root'
})
export class CatalogueStoreService {


  private url: string = "http://localhost:3000/produits"

  constructor(private http: HttpClient) { }

  all(): Observable<Catalogue> {
    return this.http.get<Catalogue>(this.url).pipe(
      map(data => {
        data.produits = [...data.menu, ...data.burger]
        return data
      })
    )
  }

  produit$ = (id: number) => {
    return this.http.get<Catalogue>(`${this.url}/${id}`)
  }
}
