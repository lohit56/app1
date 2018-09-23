import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';

import { IntrosComponent } from './intros/intros.component';
import { PlacesModule } from 'src/app/places/places.module';
import { PlacesComponent } from 'src/app/places/places.component';

import { MapModule } from './common/map/map.module';



const routes :Routes=[

  {

    path:'', redirectTo: '/places', pathMatch:'full'
  }
,




];



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IntrosComponent,
 
  ],
  imports: [
    BrowserModule,PlacesModule,RouterModule.forRoot(routes),MapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
