import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = ''; // Define email
  password: string = ''; // Define password

  myForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private loginService: LoginService) {}

  login() {
    const username = this.myForm.get('username')?.value ?? '';
    const password = this.myForm.get('password')?.value ?? '';
  
    this.loginService.getRequestToken().subscribe({
      next: (tokenResponse) => {

        const requestToken = tokenResponse.request_token ?? '';
        this.loginService.validateWithLogin(username, password, requestToken).subscribe({
          next: (validateResponse) => {

            this.loginService.createSessionId(requestToken).subscribe(sessionResponse => {
              console.log('Session ID:', sessionResponse.session_id);

            });
          },
          error: (error) => console.error('Error validando el token:', error),
        });
      },
      error: (error) => console.error('Error obteniendo el request_token:', error),
    });
  }
}
