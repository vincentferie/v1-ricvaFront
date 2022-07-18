import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartSocialeFormComponent } from './part-sociale-form.component';

describe('PartSocialeFormComponent', () => {
  let component: PartSocialeFormComponent;
  let fixture: ComponentFixture<PartSocialeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartSocialeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartSocialeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
