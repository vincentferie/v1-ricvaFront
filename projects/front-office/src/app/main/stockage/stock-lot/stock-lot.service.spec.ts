import { TestBed } from '@angular/core/testing';

import { StockLotService } from './stock-lot.service';

describe('StockLotService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StockLotService = TestBed.get(StockLotService);
    expect(service).toBeTruthy();
  });
});
