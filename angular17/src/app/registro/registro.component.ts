import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/registro.service';
import { RegistroUsuario } from '../interfaces/registro-usuario.interface';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {
  // Inicializar con un FormGroup vacío para asegurar que nunca sea undefined.
  registroForm: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder, private authService: AuthService) {
    // No es necesario hacer más en el constructor
  }

  ngOnInit() {
    // Configurar el FormGroup en ngOnInit
    this.registroForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required]],
      password1: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', [Validators.required, Validators.minLength(6)]],
      rol: ['', [Validators.required]]
    }, { validator: this.mustMatch('password1', 'password2') });
  }

  mustMatch(passwordKey: string, confirmPasswordKey: string) {
    return (group: FormGroup) => {
      let passwordInput = group.controls[passwordKey],
          passwordConfirmationInput = group.controls[confirmPasswordKey];
      if (passwordInput.value !== passwordConfirmationInput.value) {
        return passwordConfirmationInput.setErrors({notEquivalent: true});
      }
      else {
        return passwordConfirmationInput.setErrors(null);
      }
    };
  }

  register() {
    if (this.registroForm.valid) {
      const usuario: RegistroUsuario = this.registroForm.value;
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
}
