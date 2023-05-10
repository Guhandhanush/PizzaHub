import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogsigninComponent } from './dialogsignin.component';

describe('DialogsigninComponent', () => {
  let component: DialogsigninComponent;
  let fixture: ComponentFixture<DialogsigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogsigninComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogsigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
