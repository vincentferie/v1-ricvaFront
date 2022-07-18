import { TestBed } from '@angular/core/testing';

import { UsinageService } from './usinage.service';

describe('UsinageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsinageService = TestBed.get(UsinageService);
    expect(service).toBeTruthy();
  });
});
