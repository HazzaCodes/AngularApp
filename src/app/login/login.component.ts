import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../Services/user.service'; // Import your service
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  isLoginFailed: boolean = false;
  loginStatus: string = "status"

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.userService.setPreviousRoute("/login");
  }

  onLogin() {
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username')?.value;
      const password = this.loginForm.get('password')?.value;
      const user = {username, password};
      this.userService.loginUser(user).subscribe(
        (response) => {
          console.log('User logged in successfully:', response);
          console.log("User token: ", response.data)
          this.loginStatus = response.message;
          // You can handle a successful login, such as setting user credentials or redirecting the user.
          this.userService.storeToken(response.data);
          this.userService.storeUsername(username);
          this.router.navigate([`/get-all-posts`]);

        },
        (error) => {
        
          this.loginStatus = error.error.message;
          this.isLoginFailed = true;
          console.error('Error logging in:', error);
          // Handle and display the error to the user, such as showing an error message.
        }
      );
    } else {
      this.isLoginFailed = true;
      this.loginStatus = "invalid username or password";
      console.log('Form is invalid. Please fix the errors.');
    }
  }
  onSignup() {
    this.router.navigate(['/signup']);
  }
}
