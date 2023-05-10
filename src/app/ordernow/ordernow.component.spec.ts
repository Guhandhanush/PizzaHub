import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdernowComponent } from './ordernow.component';

describe('OrdernowComponent', () => {
  let component: OrdernowComponent;
  let fixture: ComponentFixture<OrdernowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdernowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdernowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
