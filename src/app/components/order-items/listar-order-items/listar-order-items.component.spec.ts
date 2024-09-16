import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarOrderItemsComponent } from './listar-order-items.component';

describe('ListarOrderItemsComponent', () => {
  let component: ListarOrderItemsComponent;
  let fixture: ComponentFixture<ListarOrderItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarOrderItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarOrderItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
