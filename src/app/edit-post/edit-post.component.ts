import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../Services/post.service';
import { UserService } from '../Services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent {
  postId: number = 1;
  titleValue: string = '';
  contentValue: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService,
    private userService: UserService,
    private fb: FormBuilder
  ) {
    if (!this.titleValue) {
    this.titleValue = '';
    }
    if (!this.contentValue) {
    this.contentValue = '';
    }
  }
  
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.postId = +params['id'];
      if (isNaN(this.postId)) {
        console.log("Invalid post")
      }
    });
  }

  updatePost() {
    const editedPost = {
      title: this.titleValue,
      content: this.contentValue
    };

  

    console.log("post id = ", this.postId);

    this.postService.editPost(this.postId, editedPost, this.userService.getToken()!).subscribe(
      
      (response: any) => {
        console.log(this.titleValue)
        console.log('Post updated successfully:', response);
         this.router.navigate(['get-posts']);
      },
      (error: any) => {
        console.error('Error updating post:', error);
        this.router.navigate(['login']);
      }
    );
  }

  saveEdits() {
    this.updatePost();
  }

  closeModal() {
    this.router.navigate(['/get-posts']);
  }

  onTitleChange(event: any) {
    this.titleValue = event.target.value;
  }
  
  onContentChange(event: any) {
    this.contentValue = event.target.value;
  }
}
