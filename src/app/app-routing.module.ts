import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { GetPostComponent } from './get-post/get-post.component';
import { AddPostComponent } from './add-post/add-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { GetAllPostsComponent } from './get-all-posts/get-all-posts.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: "signup", component: SignupComponent},
  {path: "get-posts", component: GetPostComponent},
  {path: 'add-post', component: AddPostComponent},
  {path: 'edit-post', component: EditPostComponent},
  {path: 'edit-post/:id', component: EditPostComponent},
  {path: 'get-all-posts', component: GetAllPostsComponent}
  
  // Define a route for the LoginComponent
  // You can add more routes here for other components/pages
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
