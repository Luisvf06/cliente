import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/registro.service';
import { RegistroUsuario } from '../interfaces/registro-usuario.interface';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent {
  email: string = ''; // Define email
  password: string = ''; // Define password
  confirmPassword: string = ''; // Define confirmPassword

  registroForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password1: new FormControl('', Validators.required),
    password2: new FormControl('', Validators.required),
  });

  constructor(private authService: AuthService) {}

  onSubmit() {
    if (this.registroForm.valid) {
      const usuario: RegistroUsuario = {
        username: this.registroForm.get('username')?.value ?? '',
        email: this.registroForm.get('email')?.value ?? '',
        password1: this.registroForm.get('password1')?.value ?? '',
        password2: this.registroForm.get('password2')?.value ?? '',
        rol: this.registroForm.get('rol')?.value ?? ''
      };
  
      this.authService.registrar(usuario).subscribe({
        next: (response) => {
          console.log('Usuario registrado con éxito', response);
        },
        error: (error) => {
          console.error('Error al registrar usuario', error);
        }
      });
    }
  }
 
  register() {
    this.onSubmit();
  }
}
