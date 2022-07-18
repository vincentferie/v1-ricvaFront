import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartSocialeDetailsComponent } from './part-sociale-details.component';

describe('PartSocialeDetailsComponent', () => {
  let component: PartSocialeDetailsComponent;
  let fixture: ComponentFixture<PartSocialeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartSocialeDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartSocialeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
