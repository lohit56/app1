import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router' ;
import {Place} from '../place.model';
import { PlacesService } from 'src/app/places/places.service';


@Component({
  selector: 'app-places-detail',
  templateUrl: './places-detail.component.html',
  styleUrls: ['./places-detail.component.scss']
})
export class PlacesDetailComponent implements OnInit {


        place : Place;

        placeId : string;





  constructor( private route :ActivatedRoute,private placeService :PlacesService) {



   }

  ngOnInit() {


    this.route.params.subscribe((params)=>{

      console.log(params);
      this.placeId = params['placesId'];
      console.log( this.placeId);


    });


    this.getPlace(this.placeId);




  }



  public getPlace(id:string){



  this.placeService.getPlaceById(this.placeId).subscribe((place)=>{



        this.place = place;

        console.log(this.place)







    });

  }

  mapReadyHandler(){



  }
}
