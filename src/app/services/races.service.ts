import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RacesService {

  constructor(private http: HttpClient) { }

  getRaces(){
    return this.http.get(`${env.API_BASE_URL}/api/races`);
  }

  addRace(race: any){
    return this.http.post(`${env.API_BASE_URL}/api/race`, race);
  }
}
