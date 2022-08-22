import { TestBed } from '@angular/core/testing';

import { InsectionApiService } from './insection-api.service';

describe('InsectionApiService', () => {
  let service: InsectionApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsectionApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
