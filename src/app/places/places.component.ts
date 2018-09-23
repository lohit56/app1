import { Component, OnInit } from '@angular/core';
import {Place} from './place.model';
import { PlacesService } from '../places/places.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent implements OnInit {


  places : Place[];


  constructor(private placesService: PlacesService) { }

  ngOnInit() {

    const placesObservable= this.placesService.getPlaces();

   

  }



}
