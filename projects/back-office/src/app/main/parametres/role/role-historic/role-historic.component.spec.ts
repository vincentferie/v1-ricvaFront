import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleHistoricComponent } from './role-historic.component';

describe('RoleHistoricComponent', () => {
  let component: RoleHistoricComponent;
  let fixture: ComponentFixture<RoleHistoricComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleHistoricComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleHistoricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
