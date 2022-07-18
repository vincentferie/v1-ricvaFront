import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartSocialeCreateComponent } from './part-sociale-create.component';

describe('PartSocialeCreateComponent', () => {
  let component: PartSocialeCreateComponent;
  let fixture: ComponentFixture<PartSocialeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartSocialeCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartSocialeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
