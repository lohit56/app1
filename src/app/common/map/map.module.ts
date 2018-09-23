import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from '../map/map.component';
import { AgmCoreModule } from '@agm/core';
import { MapService } from '../map/map.service';


@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCTBsFpW2dMRMilDzTdShMsGQDyunQixeU'
    })
  ],
  declarations: [MapComponent],
  exports: [MapComponent],
  providers:[MapService]
})
export class MapModule { }
