import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidNavbarComponent } from './paid-navbar.component';

describe('PaidNavbarComponent', () => {
  let component: PaidNavbarComponent;
  let fixture: ComponentFixture<PaidNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaidNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaidNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
