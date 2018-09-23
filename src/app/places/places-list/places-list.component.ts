import { Component, OnInit,Input } from '@angular/core';
import { Place } from '../place.model'
import { PlacesService } from '../places.service';


@Component({
  selector: 'app-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.scss']
})
export class PlacesListComponent implements OnInit {

  places : Place[];

  constructor(private placesService: PlacesService) { }

  ngOnInit() {
    const placesObservable= this.placesService.getPlaces();
    placesObservable.subscribe(
      (data)=>{

        this.places=data;

        console.log(this.places);

      },
      (err)=>{

        console.log(err);
      },
       ()=>{


       });
  }

}
