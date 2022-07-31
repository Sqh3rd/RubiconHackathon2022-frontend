import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { bee_hive, own_bee_hives, other_bee_hives, fav_bee_hives } from './bee_hive';

@Injectable({
  providedIn: 'root'
})
export class ManageBeehivesService {

  constructor() { }

  fetchOtherHives(): Observable<bee_hive[]>{
    return of(other_bee_hives);
  }
  fetchOwnHives(): Observable<bee_hive[]> {
    return of(own_bee_hives);
  }
  fetchFavHives(): Observable<bee_hive[]> {
    return of(fav_bee_hives);
  }
  appendOwnHive(hive: bee_hive){
    own_bee_hives.push(hive);
  }
  deleteOwnHive(hive_id:number){
    own_bee_hives.splice(own_bee_hives.findIndex(val => val.id === hive_id), 1);
  }
}
