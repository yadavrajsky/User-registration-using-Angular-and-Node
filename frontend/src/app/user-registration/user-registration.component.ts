// user-registration.component.ts
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css'],
  standalone: true,
  imports:[ReactiveFormsModule]
})
export class UserRegistrationComponent {
  registrationForm: FormGroup;

  constructor(private userService: UserService, private router: Router) {
    this.registrationForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }


  isNameInvalid() {
    const control = this.registrationForm.get('name');
    return control !== null && control.invalid && control.touched;
  }

  isEmailRequired() {
    const control = this.registrationForm.get('email');
    return control !== null && control.errors?.['required'];
  }

  isEmailFormatInvalid() {
    const control = this.registrationForm.get('email');
    return control !== null && control.errors?.['email'] && control.touched;
  }
  // Function to submit the form
  onSubmit() {
    if (this.registrationForm.valid) {
      const { name, email } = this.registrationForm.value;
      this.userService.registerUser(name, email).subscribe(
        () => {
          // Registration successful, navigate to /fetch
          this.router.navigate(['/fetch']);
        },
        (error) => {
          console.error('Error registering user:', error);
          // Handle error
        }
      );
    } else {
      // Form is invalid, mark all fields as touched to display error messages
      this.registrationForm.markAllAsTouched();
    }
  }
}
