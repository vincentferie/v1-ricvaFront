import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DroitAdhesionHistoricComponent } from './droit-adhesion-historic.component';

describe('DroitAdhesionHistoricComponent', () => {
  let component: DroitAdhesionHistoricComponent;
  let fixture: ComponentFixture<DroitAdhesionHistoricComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DroitAdhesionHistoricComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DroitAdhesionHistoricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
