import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockLotUsineHistoricComponent } from './stock-lot-usine-historic.component';

describe('StockLotUsineHistoricComponent', () => {
  let component: StockLotUsineHistoricComponent;
  let fixture: ComponentFixture<StockLotUsineHistoricComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockLotUsineHistoricComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockLotUsineHistoricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
