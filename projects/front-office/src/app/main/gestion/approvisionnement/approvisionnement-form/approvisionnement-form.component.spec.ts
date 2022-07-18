import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovisionnementFormComponent } from './approvisionnement-form.component';

describe('ApprovisionnementFormComponent', () => {
  let component: ApprovisionnementFormComponent;
  let fixture: ComponentFixture<ApprovisionnementFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovisionnementFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovisionnementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
