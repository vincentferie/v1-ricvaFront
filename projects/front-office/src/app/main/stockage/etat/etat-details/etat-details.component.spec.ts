import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatDetailsComponent } from './etat-details.component';

describe('EtatDetailsComponent', () => {
  let component: EtatDetailsComponent;
  let fixture: ComponentFixture<EtatDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtatDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtatDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
