import { Component, OnInit } from '@angular/core';
import { PostService } from '../Services/post.service';
import { UserService } from '../Services/user.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-get-post',
  templateUrl: './get-all-posts.component.html',
  styleUrls: ['./get-all-posts.component.css']}
  )
export class GetAllPostsComponent implements OnInit {
  posts: any[] = [];
  isDropdownOpen: { [key: number]: boolean } = {};
  editedPostId: number = -1;


  constructor(private postService: PostService, private userService: UserService, private router: Router) 
  {}



  ngOnInit() {
    this.loadPosts();
    this.userService.setPreviousRoute('get-all-posts');
  }

  loadPosts() {
    this.postService.getAllPosts(this.userService.getToken()!).subscribe(
      (response) => {
        console.log(response.success);
        this.posts = response.data;
        console.log(this.posts);
      },
      (error) => {
        console.error('Error fetching posts:', error);
      }
    );
  }

  onDeletePostClick(post: any) {
    this.postService.deletePost(post.id, this.userService.getToken()!).subscribe(
      (response) => {
        console.log('Post deleted successfully:', response);
        this.loadPosts();
      },
      (error) => {
        console.error('Error deleting post:', error);
      }
    );
  }
  viewMyPosts()
 {

 }

 openCommentDialog()
 {} 
 logout() {

 }




}
