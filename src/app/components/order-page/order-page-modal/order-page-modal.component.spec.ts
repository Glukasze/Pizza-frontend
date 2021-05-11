import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPageModalComponent } from './order-page-modal.component';

describe('OrderPageModalComponent', () => {
  let component: OrderPageModalComponent;
  let fixture: ComponentFixture<OrderPageModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderPageModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderPageModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
