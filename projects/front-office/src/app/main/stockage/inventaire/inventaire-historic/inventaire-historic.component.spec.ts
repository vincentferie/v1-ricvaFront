import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventaireHistoricComponent } from './inventaire-historic.component';

describe('InventaireHistoricComponent', () => {
  let component: InventaireHistoricComponent;
  let fixture: ComponentFixture<InventaireHistoricComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventaireHistoricComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventaireHistoricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
