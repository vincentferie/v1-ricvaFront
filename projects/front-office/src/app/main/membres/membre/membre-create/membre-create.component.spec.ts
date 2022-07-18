import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembreCreateComponent } from './membre-create.component';

describe('MembreCreateComponent', () => {
  let component: MembreCreateComponent;
  let fixture: ComponentFixture<MembreCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembreCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembreCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
