import { TestBed } from '@angular/core/testing';

import { PartSocialeService } from './part-sociale.service';

describe('PartSocialeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PartSocialeService = TestBed.get(PartSocialeService);
    expect(service).toBeTruthy();
  });
});
