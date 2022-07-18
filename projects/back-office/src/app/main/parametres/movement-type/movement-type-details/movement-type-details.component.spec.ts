import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovementTypeDetailsComponent } from './movement-type-details.component';

describe('MovementTypeDetailsComponent', () => {
  let component: MovementTypeDetailsComponent;
  let fixture: ComponentFixture<MovementTypeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovementTypeDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovementTypeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
