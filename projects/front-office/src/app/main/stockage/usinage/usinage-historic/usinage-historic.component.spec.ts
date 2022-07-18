import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsinageHistoricComponent } from './usinage-historic.component';

describe('UsinageHistoricComponent', () => {
  let component: UsinageHistoricComponent;
  let fixture: ComponentFixture<UsinageHistoricComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsinageHistoricComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsinageHistoricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
