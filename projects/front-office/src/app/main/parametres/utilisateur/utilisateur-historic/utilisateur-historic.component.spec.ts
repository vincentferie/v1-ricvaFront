import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisateurHistoricComponent } from './utilisateur-historic.component';

describe('UtilisateurHistoricComponent', () => {
  let component: UtilisateurHistoricComponent;
  let fixture: ComponentFixture<UtilisateurHistoricComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtilisateurHistoricComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilisateurHistoricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
