import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { FormsModule, NgForm } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { FloatLabelModule } from "primeng/floatlabel"  
import { invalidEmailValidator } from '../../shared/invalid-email.validator';
import { invalidPasswordValidator } from '../../shared/invalid-password.validator';
import { emailRegex } from '../../shared/invalid-email.validator';
import { passwordRegex } from '../../shared/invalid-password.validator';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule,FormsModule, ButtonModule, InputGroupModule, InputGroupAddonModule, InputTextModule, PasswordModule, DividerModule, FloatLabelModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  authService = inject(AuthService);
  router = inject(Router);

  protected loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, invalidEmailValidator(emailRegex)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), invalidPasswordValidator(passwordRegex)])
  })

  onSubmit(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      this.authService.login(this.loginForm.value).subscribe({
        next: (data: any) => {
          console.log('submited data', data);
          if (this.authService.isLoggedIn()){
            this.router.navigate(['/home']);
          }
        },

        error: (err) => console.log ('Error onSubmit', err)
      })



      //   next: (data:any) => {
      //     console.log('submited', data);
      //     if(this.authService.isLoggedIn()){
      //       this.router.navigate(['/admin']);
      //     },
      //     error: (err) => console.log('Error onSubmit', err);   
      // });
    }
    }
  // }

  // onSubmit(form: NgForm): void{
  //   if (form.valid){
  //       const { email, password } = form.value;
  //       console.log(form.value);
  //       this.authService.login(email, password)
  //           .subscribe({
  //               next: () => {
  //                 console.log('register success')
  //                   this.router.navigateByUrl('/');
  //               },
  //               error: (err) => {
  //                   console.log('Error login:', err);
  //               } 
  //           });
  //   }
  // }


}
