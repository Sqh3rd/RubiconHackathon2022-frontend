import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { bee_hive, bee_hives, fav_bee_rels, fav_hive_rel, phr, posts } from './bee_hive';

@Injectable({
  providedIn: 'root'
})
export class ManageBeehivesService {

  constructor() { }

  fetchOtherHives(full_name:string): Observable<bee_hive[]>{
    let other_bee_hives: bee_hive[] = [];
    for(let i = 0; i < bee_hives.length; i++){
      if (bee_hives[i].user_owner != full_name){
        other_bee_hives.push(bee_hives[i]);
      }
    }
    return of(other_bee_hives);
  }
  fetchOwnHives(full_name:string): Observable<bee_hive[]> {
    let own_bee_hives: bee_hive[] = [];
    for(let i = 0; i < bee_hives.length; i++){
      if (bee_hives[i].user_owner == full_name){
        own_bee_hives.push(bee_hives[i]);
      }
    }
    return of(own_bee_hives);
  }
  fetchFavHives(full_name:string): Observable<bee_hive[]> {
    let fbh: bee_hive[] = [];
    for(let i = 0; i < fav_bee_rels.length; i++){
      if (fav_bee_rels[i].user_owner === full_name){
        let hive = bee_hives.find(val => val.id === fav_bee_rels[i].hive_id);
        console.log(hive);
        if(hive){
          fbh.push(hive);
        }
      }
    }
    return of(fbh);
  }
  appendOwnHive(hive: bee_hive){
    bee_hives.push(hive);
  }
  deleteOwnHive(hive_id:number){
    bee_hives.splice(bee_hives.findIndex(val => val.id === hive_id), 1);
  }
}
