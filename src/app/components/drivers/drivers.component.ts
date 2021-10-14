import { Component, OnInit } from '@angular/core';
import { DriverService } from 'src/app/services/driver.service';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {

  constructor(private ds: DriverService) { }

  drivers: any;

  ngOnInit(): void {
    this.ds.getDrivers().subscribe(res =>{
      this.drivers = res;
    })
  }


}
