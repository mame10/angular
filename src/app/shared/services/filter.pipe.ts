import { Pipe, PipeTransform } from '@angular/core';
import { Commande } from '../models/commande';

@Pipe({
  name: 'filterpipe'
})
export class FilterPipe implements PipeTransform {

  transform(commande: Commande[], filter:string){
    if(commande.length==0 || filter==''){
      return commande;
    }

    return commande.filter(cmd =>cmd.etat?.toLowerCase().indexOf(
      filter.toLowerCase()) !== -1
      )
    
  }

}
