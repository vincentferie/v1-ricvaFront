import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovisionnementHistoricComponent } from './approvisionnement-historic.component';

describe('ApprovisionnementHistoricComponent', () => {
  let component: ApprovisionnementHistoricComponent;
  let fixture: ComponentFixture<ApprovisionnementHistoricComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovisionnementHistoricComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovisionnementHistoricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
