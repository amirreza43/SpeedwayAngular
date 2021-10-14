import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  constructor(private http: HttpClient) { }

  getDrivers(){
    return this.http.get(`${env.API_BASE_URL}/api/drivers/all`);
  }

  addDriver(driver: any){
    return this.http.post(`${env.API_BASE_URL}/api/Drivers`, driver);
  }

}
