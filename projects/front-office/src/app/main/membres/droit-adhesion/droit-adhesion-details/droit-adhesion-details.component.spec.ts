import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DroitAdhesionDetailsComponent } from './droit-adhesion-details.component';

describe('DroitAdhesionDetailsComponent', () => {
  let component: DroitAdhesionDetailsComponent;
  let fixture: ComponentFixture<DroitAdhesionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DroitAdhesionDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DroitAdhesionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
