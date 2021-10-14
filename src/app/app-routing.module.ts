import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { DriverComponent } from './components/driver/driver.component';
import { RaceCarsComponent } from './components/race-cars/race-cars.component';
import { RacesComponent } from './components/races/races.component';

const routes = [
  { path: 'drivers', component: DriverComponent },
  { path: 'Cars', component: RaceCarsComponent },
  { path: 'races', component: RacesComponent }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
