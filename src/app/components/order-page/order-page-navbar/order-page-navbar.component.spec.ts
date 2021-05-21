import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPageNavbarComponent } from './order-page-navbar.component';

describe('NavbarComponent', () => {
  let component: OrderPageNavbarComponent;
  let fixture: ComponentFixture<OrderPageNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderPageNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderPageNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
