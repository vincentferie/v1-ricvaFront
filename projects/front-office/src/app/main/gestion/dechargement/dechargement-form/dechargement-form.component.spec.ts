import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DechargementFormComponent } from './dechargement-form.component';

describe('DechargementFormComponent', () => {
  let component: DechargementFormComponent;
  let fixture: ComponentFixture<DechargementFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DechargementFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DechargementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
