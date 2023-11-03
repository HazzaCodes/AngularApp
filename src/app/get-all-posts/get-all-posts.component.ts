import { Component, OnInit } from '@angular/core';
import { PostService } from '../Services/post.service';
import { UserService } from '../Services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Subject, debounceTime } from 'rxjs';


@Component({
  selector: 'app-get-post',
  templateUrl: './get-all-posts.component.html',
  styleUrls: ['./get-all-posts.component.css']}
  )
export class GetAllPostsComponent implements OnInit {
  currentPosts: any[] = [];
  allPosts: any[] = []
  posts: any[] = []
  filteredPosts: any[] = [];
  username: string = ""
  isDropdownOpen: { [key: number]: boolean } = {};
  searchKeyword: string = '';
  isFiltered: boolean = false;
  private searchKeywordSubject: Subject<string> = new Subject<string>();

  constructor(private postService: PostService, private userService: UserService, private router: Router, private route: ActivatedRoute) 
  {
    
  }



  ngOnInit() {

    // this.route.params.subscribe((params) => {
    //   this.searchKeyword= params['searchKeyword'];
    //   console.log("keyword = ", this.searchKeyword);
    // });
    // console.log("key = ", this.searchKeyword);

    this.username = this.userService.getUsername() + "";
    
    
      this.loadPosts();;
  

    this.searchKeywordSubject.pipe(debounceTime(500)).subscribe((value) => {
      this.searchKeyword = value; // Update the searchKeyword with the debounced value
    });

    console.log(this.searchKeyword);

  }

  
  loadPosts() {
    this.postService.getAllPosts(this.userService.getToken()!).subscribe(
      (response) => {
        console.log(response.success);
        this.allPosts = response.data;
        this.currentPosts = this.allPosts;
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
  this.router.navigate([`/get-posts`]);
 }

 logout() {
  this.userService.clearAuthentication();
  this.router.navigate(['/login']);
 }

 loadFilteredPosts() {
  console.log(this.searchKeyword.length)
  console.log(this.searchKeyword)
  if (this.searchKeyword != "") {
  const filteredPosts = this.allPosts.filter((post) => {
    return post.title.toLowerCase().includes(this.searchKeyword) || post.content.toLowerCase().includes(this.searchKeyword);
  });
  console.log("filt=  " , filteredPosts);

  this.currentPosts = filteredPosts;
}
else {
  this.currentPosts = this.allPosts;
}
 }

selectedPost: any; // Define a property to store the selected post

openCommentDialog(post: any) {
  console.log(post);
  this.router.navigate([`/add-comment/${post.id}`]);
}



onSearchPosts(event: any)  {
    const target = event.target as HTMLInputElement;
    const searchKeyword = target.value;
    this.searchKeyword = searchKeyword.toLowerCase();
    console.log("onSearchPosts = ", searchKeyword);
    if (this.searchKeyword != "") {
      const filteredPosts = this.allPosts.filter((post) => {
        return post.title.toLowerCase().includes(this.searchKeyword) || post.content.toLowerCase().includes(this.searchKeyword);
      });
      console.log("filt=  " , filteredPosts);
    
      this.currentPosts = filteredPosts;
    }
    else {
      this.currentPosts = this.allPosts;
    }
}
}