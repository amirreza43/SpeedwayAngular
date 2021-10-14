import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DriverService } from 'src/app/services/driver.service';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

  driverForm!: FormGroup;
  showSuccess: Boolean = false
  driver: any;
  drivers: any;

  constructor(private fb: FormBuilder, private ds: DriverService) { }

  ngOnInit(): void {
    this.driverForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      nickname: ['', [Validators.required, Validators.minLength(3)]],
      age: ['', [Validators.required]]
    })
    this.ds.getDrivers().subscribe(res =>{
      this.drivers = res;
      console.log(res);
      
    })
  }
  onSubmit(){

    this.driver = {
      firstName: this.driverForm.controls.firstName.value,
      lastName: this.driverForm.controls.lastName.value,
      nickname: this.driverForm.controls.nickname.value,
      age: this.driverForm.controls.age.value
    }
    this.ds.addDriver(this.driver).subscribe(res => {
      console.log(res);
      this.ds.getDrivers().subscribe(res =>{
        this.drivers = res;
      })
    });
    this.drivers.push(this.driver);

    this.showSuccess = true

    setTimeout(()=>{ this.showSuccess = false }, 3000)
    this.driver = {
      firstName: '',
      lastName: '',
      nickname: '',
      age: 0
    };
    console.log(this.drivers);

    this.driverForm.reset();

  }

}
