import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceCarsComponent } from './race-cars.component';

describe('RaceCarsComponent', () => {
  let component: RaceCarsComponent;
  let fixture: ComponentFixture<RaceCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaceCarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
