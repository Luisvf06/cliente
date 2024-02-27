import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service'; // Asegúrate de que la ruta de importación sea correcta

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  myForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    contrasenha: new FormControl('', Validators.required)
  });

  constructor(private loginService: LoginService) {}

  saveData() {
    const nombre = this.myForm.get('nombre')?.value ?? '';
    const contrasenha = this.myForm.get('contrasenha')?.value ?? '';
  
    // Asumiendo que el método login ya está definido en tu servicio
    this.loginService.validateTokenWithLogin(nombre, contrasenha, 'tu_request_token_aquí').subscribe({
      next: (response) => {
        console.log(response);
        // Maneja la respuesta exitosa aquí
        if (response.success) {
          console.log('Login exitoso');
          // Por ejemplo, guardar el token recibido en el almacenamiento local y redirigir al usuario
        } else {
          console.log('Credenciales incorrectas o error en la respuesta');
          // Maneja el caso de credenciales incorrectas o errores en la respuesta
        }
      },
      error: (error: any) => {
        console.error('Error en la solicitud', error);
        // Maneja el error aquí
      }
    });
  }
}
