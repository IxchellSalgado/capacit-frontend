import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleOrderItemsComponent } from './detalle-order-items.component';

describe('DetalleOrderItemsComponent', () => {
  let component: DetalleOrderItemsComponent;
  let fixture: ComponentFixture<DetalleOrderItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleOrderItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleOrderItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
