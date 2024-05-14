import { TestBed } from '@angular/core/testing';

import { MedrecService } from './medrec.service';

describe('MedrecService', () => {
  let service: MedrecService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedrecService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
