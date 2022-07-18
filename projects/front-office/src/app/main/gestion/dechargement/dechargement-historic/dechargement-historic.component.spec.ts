import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DechargementHistoricComponent } from './dechargement-historic.component';

describe('DechargementHistoricComponent', () => {
  let component: DechargementHistoricComponent;
  let fixture: ComponentFixture<DechargementHistoricComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DechargementHistoricComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DechargementHistoricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
