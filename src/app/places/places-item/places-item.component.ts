import { Component, OnInit,Input } from '@angular/core';
import{ Place} from '../place.model';
@Component({
  selector: 'app-places-item',
  templateUrl: './places-item.component.html',
  styleUrls: ['./places-item.component.scss']
})
export class PlacesItemComponent implements OnInit {

  @Input()
  place : Place ;

  constructor() { }

  ngOnInit() {
  }

}
