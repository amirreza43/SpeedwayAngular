import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RacesService } from 'src/app/services/races.service';
import { RaceCarsService } from 'src/app/services/race-cars.service';

@Component({
  selector: 'app-race-cars',
  templateUrl: './race-cars.component.html',
  styleUrls: ['./race-cars.component.css']
})
export class RaceCarsComponent implements OnInit {
  
  raceCarForm!: FormGroup;
  showSuccess: Boolean = false
  raceCar: any;
  raceCars: any;
  drvierId!: any;

  constructor(private rcs: RaceCarsService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.raceCarForm = this.fb.group({
      nickname: ['', [Validators.required, Validators.minLength(3)]],
      driverId: ['', [Validators.required]],
      model: ['', [Validators.required]],
      year: ['', [Validators.required]],
      status: ['', [Validators.required]],
      carType: ['', [Validators.required]]
    })
    this.rcs.getRaceCars().subscribe(res =>{
      this.raceCars = res;
      console.log(res);
      
    })
  }

  onSubmit(){
    this.raceCar = {
      nickname: this.raceCarForm.controls.nickname.value,
      model: parseInt(this.raceCarForm.controls.model.value),
      carType: parseInt(this.raceCarForm.controls.carType.value),
      year: this.raceCarForm.controls.year.value,
      status: parseInt(this.raceCarForm.controls.status.value)
    }
    this.drvierId = this.raceCarForm.controls.driverId.value;
    this.rcs.addRaceCar(this.raceCar, this.drvierId).subscribe(res => {
      console.log(res);
      this.rcs.getRaceCars().subscribe(res =>{
        this.raceCars = res;
      })
    });
    // this.raceCars.push(this.raceCar);

    this.showSuccess = true

    setTimeout(()=>{ this.showSuccess = false }, 3000)

    console.log(this.raceCar);

    this.raceCarForm.reset();
  }

}
