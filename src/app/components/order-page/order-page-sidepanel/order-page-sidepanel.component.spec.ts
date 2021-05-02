import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPageSidepanelComponent } from './order-page-sidepanel.component';

describe('OrderPageSidepanelComponent', () => {
  let component: OrderPageSidepanelComponent;
  let fixture: ComponentFixture<OrderPageSidepanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderPageSidepanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderPageSidepanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
