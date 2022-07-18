import { TestBed } from '@angular/core/testing';

import { MovementTypeService } from './movement-type.service';

describe('MovementTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovementTypeService = TestBed.get(MovementTypeService);
    expect(service).toBeTruthy();
  });
});
