import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockLotDetailsComponent } from './stock-lot-details.component';

describe('StockLotDetailsComponent', () => {
  let component: StockLotDetailsComponent;
  let fixture: ComponentFixture<StockLotDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockLotDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockLotDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
