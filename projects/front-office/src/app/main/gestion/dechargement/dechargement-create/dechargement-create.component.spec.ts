import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DechargementCreateComponent } from './dechargement-create.component';

describe('DechargementCreateComponent', () => {
  let component: DechargementCreateComponent;
  let fixture: ComponentFixture<DechargementCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DechargementCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DechargementCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
