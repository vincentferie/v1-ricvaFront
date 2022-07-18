import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovementTypeFormComponent } from './movement-type-form.component';

describe('MovementTypeFormComponent', () => {
  let component: MovementTypeFormComponent;
  let fixture: ComponentFixture<MovementTypeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovementTypeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovementTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
