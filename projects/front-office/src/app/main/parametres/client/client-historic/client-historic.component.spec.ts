import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientHistoricComponent } from './client-historic.component';

describe('ClientHistoricComponent', () => {
  let component: ClientHistoricComponent;
  let fixture: ComponentFixture<ClientHistoricComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientHistoricComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientHistoricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
