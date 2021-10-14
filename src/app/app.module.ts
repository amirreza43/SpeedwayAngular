import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DriverComponent } from './components/driver/driver.component';
import { DriversComponent } from './components/drivers/drivers.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { RaceCarsComponent } from './components/race-cars/race-cars.component';
import { RacesComponent } from './components/races/races.component';

@NgModule({
  declarations: [
    AppComponent,
    DriverComponent,
    DriversComponent,
    NavbarComponent,
    RaceCarsComponent,
    RacesComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
