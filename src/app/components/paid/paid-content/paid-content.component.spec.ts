import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidContentComponent } from './paid-content.component';

describe('PaidContentComponent', () => {
  let component: PaidContentComponent;
  let fixture: ComponentFixture<PaidContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaidContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaidContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
