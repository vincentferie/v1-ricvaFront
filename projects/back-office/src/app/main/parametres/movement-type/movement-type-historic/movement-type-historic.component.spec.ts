import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovementTypeHistoricComponent } from './movement-type-historic.component';

describe('MovementTypeHistoricComponent', () => {
  let component: MovementTypeHistoricComponent;
  let fixture: ComponentFixture<MovementTypeHistoricComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovementTypeHistoricComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovementTypeHistoricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
