import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventaireCreateComponent } from './inventaire-create.component';

describe('InventaireCreateComponent', () => {
  let component: InventaireCreateComponent;
  let fixture: ComponentFixture<InventaireCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventaireCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventaireCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
