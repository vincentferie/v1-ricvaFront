import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportHistoricComponent } from './transport-historic.component';

describe('TransportHistoricComponent', () => {
  let component: TransportHistoricComponent;
  let fixture: ComponentFixture<TransportHistoricComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportHistoricComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportHistoricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
