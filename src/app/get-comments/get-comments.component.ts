import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../Services/post.service';
import { UserService } from '../Services/user.service';
import { CommentService } from '../Services/CommentService/comment.service';
@Component({
  selector: 'app-get-comments',
  templateUrl: './get-comments.component.html',
  styleUrls: ['./get-comments.component.css'],
})
export class GetCommentsComponent implements OnInit {
  postId: number = -1;
  post: any = null;
  comments: any = null;
  isCommentModalOpen = false;
  showComments = false;
  showInput = false;
  newComment = '';


  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private userService: UserService,
    private commentService: CommentService
  ) {}
  

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.postId = +params['postId'];

    });
    this.loadPost();
    this.loadComments();
    console.log(this.comments);
  }
  onInputChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.newComment = target.value;
  }
  loadComments() {
      this.commentService.getComments(
      this.userService.getToken()!,
      this.postId
    ).subscribe((response) => {
      this.comments = response.data;
    },
    error => {
      console.log("error loading comments for post ", this.postId);
    })
  
  }
  loadPost() {
    console.log("pid  = ", this.postId)
    this.post = this.postService
      .getPost(this.userService.getToken()!, this.postId)
      .subscribe(
        (response) => {
          console.log(typeof response);
          this.post = response.data;
        },
        (error) => {
          console.error('Cant get post with post id = ' + this.postId);
        }
      );
    console.log(this.post);
  }

  openCommentModal() {
    this.isCommentModalOpen = true;
  }

  closeCommentModal() {
    this.isCommentModalOpen = false;
  }

  addComment() {}








}
