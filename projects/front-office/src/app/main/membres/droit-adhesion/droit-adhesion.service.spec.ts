import { TestBed } from '@angular/core/testing';

import { DroitAdhesionService } from './droit-adhesion.service';

describe('DroitAdhesionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DroitAdhesionService = TestBed.get(DroitAdhesionService);
    expect(service).toBeTruthy();
  });
});
