import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../Services/post.service';
import { UserService } from '../Services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  postForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private postService: PostService, private userService: UserService, private router: Router) {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.userService.setPreviousRoute('/add-post');
    
  }

  onSubmit() {
    if (this.postForm.valid) {
      const newPost = this.postForm.value;
      this.postService.addPost(newPost, this.userService.getToken()!).subscribe(
        (response) => {
          console.log('Post added successfully:', response);
          this.router.navigate(['/get-posts']);
        },
        (error) => {
          console.error('Error adding post:', error);
          // Handle and display the error to the user, such as showing an error message.
        }
      );
    } else {
      console.log('Form is invalid. Please fix the errors.');
    }
  }
}
