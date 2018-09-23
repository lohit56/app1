import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlacesListComponent } from './places-list/places-list.component';
import { PlacesItemComponent } from './places-item/places-item.component';
import { PlacesService } from '../places/places.service';
import { Routes, RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { PlacesComponent } from '../places/places.component';

import { PlacesDetailComponent } from './places-detail/places-detail.component';

import { MapModule } from '../common/map/map.module';


const routes: Routes = [

  {

    path: 'places' , component:PlacesComponent,

    children: [
       { path: '', component: PlacesListComponent },
        
       { path: ':placesId', component: PlacesDetailComponent }

    ]
  }
  ,



];

@NgModule({
  imports: [
    CommonModule, HttpClientModule,RouterModule.forChild(routes),MapModule
  ],
  declarations: [
    PlacesComponent,
    PlacesListComponent,
    PlacesItemComponent,
    PlacesDetailComponent,

  ], providers: [
    PlacesService
  ], exports: [PlacesComponent]
})
export class PlacesModule {





}
