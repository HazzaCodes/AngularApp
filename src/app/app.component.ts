import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './Services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularApp';

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {
    // Retrieve the previous route from the custom service
      // If an authentication token exists, navigate to the previous route or a default route
    //   console.log("prev state " + this.userService.getPreviousRoute()!)
    //   if (this.userService.getPreviousRoute()) {
    //     console.log("Went in " + this.userService.getPreviousRoute())
    //     this.router.navigate([this.userService.getPreviousRoute]);
    //   } else {
    //     this.router.navigate(['/login']); // Replace 'dashboard' with your default route
    //   }

  
        this.router.navigate(['/login'])
    
  }
  

}
