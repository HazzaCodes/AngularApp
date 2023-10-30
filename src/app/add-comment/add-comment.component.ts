import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import { CommentService } from '../Services/CommentService/comment.service';
import { UserService } from '../Services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../Services/post.service';


@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']

})

export class AddCommentComponent implements OnInit{
  /**
   *
   */
  postId: number = 0;
  post: any = null;
  comments: any = null;
  newComment: any = ""
  constructor(    private commentService: CommentService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService,
    ) {
    
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.postId = +params['postId'];
      if (isNaN(this.postId)) {
        console.log("Invalid post")
      }
    });
    this.loadPost();


    this.loadComments();

  }
  loadComments() {
    this.commentService.getComments(
    this.userService.getToken()!,
    this.postId
  ).subscribe((response) => {
    this.comments = response.data;
    console.log(this.comments);
  },
  error => {
    console.log("error loading comments for post ", this.post.id);
  })
}
loadPost() {
  this.postService.getPost(this.userService.getToken()!, this.postId).subscribe(
  (response) =>
  {
    console.log("data = ", response.data);
    this.post = response.data;
  },
  error => {
    console.log("error while getting post with id = " + this.postId);
  })
}
onClose() {

}
onAddComment(comment: any) {
  this.commentService.addComment(this.userService.getToken()!, this.postId, comment).subscribe(
    (response: any) => {
      console.log('Comment added successfully:', response);
      this.router.navigate(['/add-comment']);
    },
    (error: any) => {
      console.log(this.postId, comment)
      console.error('Error adding comment:', error);
      // Handle and display the error to the user, such as showing an error message.
    }
  )
} 
onExitButtonClick() {
  this.router.navigate([`/get-all-posts`])
}
}
