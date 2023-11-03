import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../Services/user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  signupForm: FormGroup;
  isSignupFailed: boolean = false; // Flag to control modal display
  statusMessage: string = "";


  constructor(private fb: FormBuilder, private userService: UserService) {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    });
    this.userService.setPreviousRoute('/signup')
  }

  onSubmit() {
    if (this.signupForm.valid) {
      const formData = this.signupForm.value;

      const username = this.signupForm.get("username")?.value;
      const password = this.signupForm.get("password")?.value;
      const confirmedPassword = this.signupForm.get('confirmPassword')?.value;
      const email = this.signupForm.get("email")?.value;
      const newUser = {username, password, confirmedPassword, email};

      console.log(newUser);
      // Assuming your UserService has a userRegister method
      this.userService.registerUser(newUser)
        .subscribe(
          (response) => {
            console.log(" message = ",response);
            console.log(response.success)
            this.statusMessage = response.message;
          },
          (error) => {
            console.log("Error = ", error.error, " keys = ", error.keys)
            this.statusMessage = error.error.message;
            this.isSignupFailed = true; 

            // Handle an error response here, e.g., display an error message.

          }
        );
    } else {

      console.log('Form is invalid. Please fix the errors.');
    }
  }
  closeModal() {
    this.isSignupFailed = false; // Hide the modal
  }
}
