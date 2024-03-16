import { TestBed } from '@angular/core/testing';

import { CounterServicService } from './counter-servic.service';

describe('CounterServicService', () => {
  let service: CounterServicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CounterServicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
