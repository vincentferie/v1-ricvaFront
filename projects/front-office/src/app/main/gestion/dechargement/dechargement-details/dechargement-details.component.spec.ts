import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DechargementDetailsComponent } from './dechargement-details.component';

describe('DechargementDetailsComponent', () => {
  let component: DechargementDetailsComponent;
  let fixture: ComponentFixture<DechargementDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DechargementDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DechargementDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
