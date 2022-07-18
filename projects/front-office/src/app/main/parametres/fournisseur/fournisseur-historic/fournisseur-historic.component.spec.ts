import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FournisseurHistoricComponent } from './fournisseur-historic.component';

describe('FournisseurHistoricComponent', () => {
  let component: FournisseurHistoricComponent;
  let fixture: ComponentFixture<FournisseurHistoricComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FournisseurHistoricComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FournisseurHistoricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
