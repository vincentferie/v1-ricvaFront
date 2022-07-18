import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovisionnementCreateComponent } from './approvisionnement-create.component';

describe('ApprovisionnementCreateComponent', () => {
  let component: ApprovisionnementCreateComponent;
  let fixture: ComponentFixture<ApprovisionnementCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovisionnementCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovisionnementCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
