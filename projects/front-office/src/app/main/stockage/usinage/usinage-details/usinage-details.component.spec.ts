import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsinageDetailsComponent } from './usinage-details.component';

describe('UsinageDetailsComponent', () => {
  let component: UsinageDetailsComponent;
  let fixture: ComponentFixture<UsinageDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsinageDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsinageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
