import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  constructor(private http : HttpClient) { }


  public getPlaces() : Observable<any> {

    return this.http.get('/api/v1/places'); 

  
  }


  public getPlaceById(placeId :string) : Observable<any> {

    return this.http.get('/api/v1/places/'+placeId); 
  }

  
}
