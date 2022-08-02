import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Catalogue } from '../models/catalogue';


@Injectable({
  providedIn: 'root'
})
export class CatalogueStoreService {


  private url: string = "http://localhost:3000/catalogues"

  constructor(private http: HttpClient) { }

  all(): Observable<Catalogue> {
    return this.http.get<any>(this.url).pipe(
      map(data => {
        let datas = data['hydra:member']
        let catalogue: Catalogue = {
          menu: datas[0].menu,
          burger: datas[1].burger,
          produits: [...datas[0].menu, ...datas[1].burger]
        }
        return catalogue
        // console.log(datas);
        // console.log('catalogue'); 
      })
    )
  }
  produit$ = (id: number) => {
    return this.http.get<Catalogue>(`${this.url}/${id}`)
  }
}
