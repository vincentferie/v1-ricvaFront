import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockLotUsineDetailsComponent } from './stock-lot-usine-details.component';

describe('StockLotUsineDetailsComponent', () => {
  let component: StockLotUsineDetailsComponent;
  let fixture: ComponentFixture<StockLotUsineDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockLotUsineDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockLotUsineDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
