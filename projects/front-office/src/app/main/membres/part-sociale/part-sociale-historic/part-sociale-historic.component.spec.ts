import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartSocialeHistoricComponent } from './part-sociale-historic.component';

describe('PartSocialeHistoricComponent', () => {
  let component: PartSocialeHistoricComponent;
  let fixture: ComponentFixture<PartSocialeHistoricComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartSocialeHistoricComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartSocialeHistoricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
