import { TestBed } from '@angular/core/testing';

import { DechargementService } from './dechargement.service';

describe('DechargementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DechargementService = TestBed.get(DechargementService);
    expect(service).toBeTruthy();
  });
});
