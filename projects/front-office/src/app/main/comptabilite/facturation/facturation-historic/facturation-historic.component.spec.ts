import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturationHistoricComponent } from './facturation-historic.component';

describe('FacturationHistoricComponent', () => {
  let component: FacturationHistoricComponent;
  let fixture: ComponentFixture<FacturationHistoricComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturationHistoricComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturationHistoricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
