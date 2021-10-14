import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RacesService } from 'src/app/services/races.service';

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent implements OnInit {

  constructor(private rs: RacesService, private fb: FormBuilder) { }

  raceForm!: FormGroup;
  showSuccess: Boolean = false
  race: any;
  races: any;

  ngOnInit(): void {
    this.raceForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      date: ['', [Validators.required]],
      category: ['', [Validators.required]]
    })
    this.rs.getRaces().subscribe(res =>{
      this.races = res;
      console.log(res);
    })
  }

  onSubmit(){
    this.race = {
      name: this.raceForm.controls.name.value,
      date: this.raceForm.controls.date.value,
      category: parseInt(this.raceForm.controls.category.value)
    }
    this.rs.addRace(this.race).subscribe(res => {
      console.log(res);
      this.rs.getRaces().subscribe(res =>{
        this.races = res;
      })
    });

    this.showSuccess = true

    setTimeout(()=>{ this.showSuccess = false }, 3000)

    console.log(this.race);

    this.raceForm.reset();

  }

}
