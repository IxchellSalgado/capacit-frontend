import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarOrderItemsComponent } from './registrar-order-items.component';

describe('RegistrarOrderItemsComponent', () => {
  let component: RegistrarOrderItemsComponent;
  let fixture: ComponentFixture<RegistrarOrderItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarOrderItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarOrderItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
