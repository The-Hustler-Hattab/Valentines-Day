import { TestBed } from '@angular/core/testing';

import { ValentineApiService } from './valentine-api.service';

describe('ValentineApiService', () => {
  let service: ValentineApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValentineApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
