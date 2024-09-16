import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarOrderItemsComponent } from './actualizar-order-items.component';

describe('ActualizarOrderItemsComponent', () => {
  let component: ActualizarOrderItemsComponent;
  let fixture: ComponentFixture<ActualizarOrderItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarOrderItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarOrderItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
