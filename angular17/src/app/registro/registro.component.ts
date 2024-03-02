import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/registro.service';
import { RegistroUsuario } from '../interfaces/registro-usuario.interface'; // Asegúrate de ajustar la ruta de importación correctamente

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent {
  registroForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password1: new FormControl('', Validators.required),
    password2: new FormControl('', Validators.required),
    rol: new FormControl('', Validators.required),
  });

  constructor(private authService: AuthService) {}

  onSubmit() {
    if (this.registroForm.valid) {
      // Usamos el operador ?? para proporcionar un valor predeterminado de cadena vacía 
      // en caso de que algún campo sea null o undefined.
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
          // Aquí puedes redirigir al usuario o mostrar un mensaje de éxito
        },
        error: (error) => {
          console.error('Error al registrar usuario', error);
          // Aquí puedes manejar el error, por ejemplo, mostrando un mensaje al usuario
        }
      });
    }
  }
  
}
