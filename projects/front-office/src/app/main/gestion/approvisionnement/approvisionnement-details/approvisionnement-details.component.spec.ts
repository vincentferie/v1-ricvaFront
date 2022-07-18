import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovisionnementDetailsComponent } from './approvisionnement-details.component';

describe('ApprovisionnementDetailsComponent', () => {
  let component: ApprovisionnementDetailsComponent;
  let fixture: ComponentFixture<ApprovisionnementDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovisionnementDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovisionnementDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
