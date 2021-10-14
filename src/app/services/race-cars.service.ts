import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RaceCarsService {

  constructor(private http: HttpClient) { }

  getRaceCars(){
    return this.http.get(`${env.API_BASE_URL}/api/racecars`);
  }

  addRaceCar(raceCar: any, driverId: any){
    return this.http.post(`${env.API_BASE_URL}/api/drivers/${driverId}/racecar`, raceCar);
  }
}
