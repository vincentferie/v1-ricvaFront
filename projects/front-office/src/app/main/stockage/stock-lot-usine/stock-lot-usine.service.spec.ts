import { TestBed } from '@angular/core/testing';

import { StockLotUsineService } from './stock-lot-usine.service';

describe('StockLotUsineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StockLotUsineService = TestBed.get(StockLotUsineService);
    expect(service).toBeTruthy();
  });
});
