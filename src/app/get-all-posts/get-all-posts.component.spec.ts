import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GetAllPostsComponent } from './get-all-posts.component';

describe('GetAllPostsComponent', () => {
  let component: GetAllPostsComponent;
  let fixture: ComponentFixture<GetAllPostsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetAllPostsComponent]
    });
    fixture = TestBed.createComponent(GetAllPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});