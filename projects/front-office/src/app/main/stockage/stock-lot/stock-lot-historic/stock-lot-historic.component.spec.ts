import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockLotHistoricComponent } from './stock-lot-historic.component';

describe('StockLotHistoricComponent', () => {
  let component: StockLotHistoricComponent;
  let fixture: ComponentFixture<StockLotHistoricComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockLotHistoricComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockLotHistoricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
