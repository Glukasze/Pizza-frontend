import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPageMenuComponent } from './order-page-menu.component';

describe('OrderPageMenuComponent', () => {
  let component: OrderPageMenuComponent;
  let fixture: ComponentFixture<OrderPageMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderPageMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderPageMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
