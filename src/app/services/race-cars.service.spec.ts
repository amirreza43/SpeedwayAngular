import { TestBed } from '@angular/core/testing';

import { RaceCarsService } from './race-cars.service';

describe('RaceCarsService', () => {
  let service: RaceCarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RaceCarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
