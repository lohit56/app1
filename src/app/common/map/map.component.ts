import { Component, OnInit,Input ,ChangeDetectorRef } from '@angular/core';
import { MapService } from '../map/map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @Input()
  location: string ;


  lat :number = 0 ;

  lng : number = 0;

  constructor(private mapService :MapService ,private  ref :ChangeDetectorRef) { }

  ngOnInit() {





  }


  //
  // mapReadyhandler(){
  //
  //
  //     this.mapService.geocodeLocation(this.location).subscribe((coordinates)=>{
  //
  //       this.lat = coordinates.lat;
  //       this.lng = coordinates.lng
  //
  //       console.log( this.lat + " " +  this.lng)
  //
  //     });
  //
  // }


  getLocation(location) {
    this.mapService.getGeoLocationNew(location).subscribe(
      (coordinates: any) => {
        this.lat = coordinates.lat;
        this.lng = coordinates.lng;

        this.ref.detectChanges();
      }, (error: string) => {
        console.error(error);
      });
  }

  mapReadyHandler() {

    this.getLocation(this.location);

  }



}
