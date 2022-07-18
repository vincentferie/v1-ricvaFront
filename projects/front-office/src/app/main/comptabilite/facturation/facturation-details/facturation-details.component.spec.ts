import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturationDetailsComponent } from './facturation-details.component';

describe('FacturationDetailsComponent', () => {
  let component: FacturationDetailsComponent;
  let fixture: ComponentFixture<FacturationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturationDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
