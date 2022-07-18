import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembreHistoricComponent } from './membre-historic.component';

describe('MembreHistoricComponent', () => {
  let component: MembreHistoricComponent;
  let fixture: ComponentFixture<MembreHistoricComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembreHistoricComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembreHistoricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
