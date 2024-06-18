import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { FormsModule, NgForm } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule,FormsModule, ButtonModule, InputGroupModule, InputGroupAddonModule, InputTextModule, PasswordModule, DividerModule, ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  authService = inject(AuthService);
  router = inject(Router);

  onSubmit(form: NgForm): void{
    if (form.valid){
        const { email, password } = form.value;
        console.log(form.value);
        this.authService.login(email, password)
            .subscribe({
                next: () => {
                  console.log('register success')
                    this.router.navigateByUrl('/');
                },
                error: (err) => {
                    console.log('Error login:', err);
                } 
            });
    }
  }


}
