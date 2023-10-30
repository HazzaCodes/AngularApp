import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupFailedModalComponent } from './signup-failed-modal.component';

describe('SignupFailedModalComponent', () => {
  let component: SignupFailedModalComponent;
  let fixture: ComponentFixture<SignupFailedModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupFailedModalComponent]
    });
    fixture = TestBed.createComponent(SignupFailedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
