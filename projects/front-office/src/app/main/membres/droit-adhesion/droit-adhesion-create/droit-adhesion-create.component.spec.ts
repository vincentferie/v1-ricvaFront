import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DroitAdhesionCreateComponent } from './droit-adhesion-create.component';

describe('DroitAdhesionCreateComponent', () => {
  let component: DroitAdhesionCreateComponent;
  let fixture: ComponentFixture<DroitAdhesionCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DroitAdhesionCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DroitAdhesionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
