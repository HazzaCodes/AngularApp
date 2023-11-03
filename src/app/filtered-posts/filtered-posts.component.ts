import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../Services/post.service';
import { UserService } from '../Services/user.service';
@Component({
  selector: 'app-filtered-posts',
  templateUrl: './filtered-posts.component.html',
  styleUrls: ['./filtered-posts.component.css']
})
export class FilteredPostsComponent implements OnInit {
  filteredPosts: any[]  =[]

  /**
   *
   */
  constructor(private route: ActivatedRoute) {
    
    
  }
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.filteredPosts = params['filteredPosts'];
      console.log(this.filteredPosts);
    })
    

  }


  

}
