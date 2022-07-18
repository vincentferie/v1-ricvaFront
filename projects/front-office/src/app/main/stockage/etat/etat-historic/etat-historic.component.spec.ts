import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatHistoricComponent } from './etat-historic.component';

describe('EtatHistoricComponent', () => {
  let component: EtatHistoricComponent;
  let fixture: ComponentFixture<EtatHistoricComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtatHistoricComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtatHistoricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
