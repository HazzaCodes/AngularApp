import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './Services/TokenInterceptorService/TokenInterceptorService';
import { GetPostComponent } from './get-post/get-post.component';
import { AddPostComponent } from './add-post/add-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { GetAllPostsComponent } from './get-all-posts/get-all-posts.component';
import { GetCommentsComponent } from './get-comments/get-comments.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { SignupFailedModalComponent } from './signup-failed-modal/signup-failed-modal.component';
import { FilteredPostsComponent } from './filtered-posts/filtered-posts.component'; 

@NgModule({
  declarations: [AppComponent, LoginComponent, SignupComponent, GetPostComponent, AddPostComponent,GetAllPostsComponent, EditPostComponent, GetCommentsComponent, AddCommentComponent, SignupFailedModalComponent, FilteredPostsComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, HttpClientModule], // Include ReactiveFormsModule
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
