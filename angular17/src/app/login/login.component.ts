import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  myForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private loginService: LoginService) {}

  login() {
    const username = this.myForm.get('username')?.value;
    const password = this.myForm.get('password')?.value;

    // Paso 1: Solicitar un request_token
    this.loginService.getRequestToken().subscribe({
      next: (response) => {
        const requestToken = response.request_token;
        // Paso 2 (manual): Redirigir al usuario para autorizar el request_token...
        // Esta parte depende de tu flujo de UX.

        // Simulación de Paso 3: Crear un ID de sesión
        // Suponiendo que ya tienes el request_token autorizado (este paso normalmente sería después de una redirección o acción del usuario)
        this.loginService.createSessionId(requestToken).subscribe(sessionResponse => {
          console.log('Session ID:', sessionResponse.session_id);
          // Aquí manejarías la lógica post-autenticación, como almacenar el session_id y redirigir al usuario
        });
      },
      error: (error) => {
        console.error('Error obteniendo el request_token:', error);
      }
    });
  }
}
