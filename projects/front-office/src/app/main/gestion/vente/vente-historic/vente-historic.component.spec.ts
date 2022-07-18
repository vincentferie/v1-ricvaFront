import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenteHistoricComponent } from './vente-historic.component';

describe('VenteHistoricComponent', () => {
  let component: VenteHistoricComponent;
  let fixture: ComponentFixture<VenteHistoricComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenteHistoricComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenteHistoricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
