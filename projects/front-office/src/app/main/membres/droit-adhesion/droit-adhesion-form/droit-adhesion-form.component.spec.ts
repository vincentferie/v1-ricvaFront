import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DroitAdhesionFormComponent } from './droit-adhesion-form.component';

describe('DroitAdhesionFormComponent', () => {
  let component: DroitAdhesionFormComponent;
  let fixture: ComponentFixture<DroitAdhesionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DroitAdhesionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DroitAdhesionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
