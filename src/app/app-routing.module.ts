import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { GetPostComponent } from './get-post/get-post.component';
import { AddPostComponent } from './add-post/add-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { GetAllPostsComponent } from './get-all-posts/get-all-posts.component';
import { GetCommentsComponent } from './get-comments/get-comments.component';
import { AddCommentComponent } from './add-comment/add-comment.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: "signup", component: SignupComponent},
  {path: "get-posts", component: GetPostComponent},
  {path: "get-posts/:username", component: GetPostComponent},

  {path: 'add-post', component: AddPostComponent},
  {path: 'edit-post', component: EditPostComponent},
  {path: 'edit-post/:id', component: EditPostComponent},
  {path: 'get-all-posts', component: GetAllPostsComponent},

  { path: 'get-comments/:postId', component: GetCommentsComponent },
  {path: 'get-comments', component: GetCommentsComponent},
  {path: 'add-comment', component: AddCommentComponent},
  {path: 'add-comment/:postId', component: AddCommentComponent},
  // Define a route for the LoginComponent
  // You can add more routes here for other components/pages
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
