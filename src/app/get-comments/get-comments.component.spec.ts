import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCommentsComponent } from './get-comments.component';

describe('GetCommentsComponent', () => {
  let component: GetCommentsComponent;
  let fixture: ComponentFixture<GetCommentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetCommentsComponent]
    });
    fixture = TestBed.createComponent(GetCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
