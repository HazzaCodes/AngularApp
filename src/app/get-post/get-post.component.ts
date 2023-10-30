import { Component, OnInit } from '@angular/core';
import { PostService } from '../Services/post.service';
import { UserService } from '../Services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-get-post',
  templateUrl: './get-post.component.html',
  styleUrls: ['./get-post.component.css']}
  )
export class GetPostComponent implements OnInit {
  posts: any[] = [];
  isDropdownOpen: { [key: number]: boolean } = {};
  editedPostId: number = -1;
  username: string = ""


  constructor(private postService: PostService, private userService: UserService, private router: Router, private route: ActivatedRoute) 
  {}

  ngOnInit() {
    this.loadPosts();
    this.username = this.userService.getUsername()+"";
  }

  loadPosts() {
    this.postService.getPosts(this.userService.getToken()!).subscribe(
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

  onAddPostClick() {
    this.router.navigate(['/add-post']);
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

  onEditPostClick(post: any) {
    console.log(post.id);
    this.router.navigate([`/edit-post/${post.id}`]);
  }
  

  toggleDropdown(postId: number) {
    // Toggle the dropdown for the specified post ID
    this.isDropdownOpen[postId] = !this.isDropdownOpen[postId];
  }
  logout() {
    this.userService.clearAuthentication();
    this.router.navigate(['/login']);
   }
   explorePosts() {
    this.router.navigate(['/get-all-posts']);
   }
   onViewCommentClick(post: any) {
    this.router.navigate([`/add-comment/${post.id}`]);
  }


}
