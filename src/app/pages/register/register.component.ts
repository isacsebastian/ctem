import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Register } from '../../models/register';
import { StrapiService } from '../../services/strapi.service';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators, NonNullableFormBuilder } from '@angular/forms';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  user: FormGroup<{
    fullname: FormControl<string>;
    email: FormControl<string>;
    phone: FormControl<string>;
  }>;

  successMessage: string = '';

  constructor(
    private service: StrapiService,
    private fb: NonNullableFormBuilder
  ) {
    const { required, pattern, minLength, maxLength } = Validators;

    this.user = this.fb.group({
      fullname: [
        '', 
        [
          required, 
          minLength(8), 
          pattern('^[a-zA-Z\\s]*$') // Valida que solo contenga letras y espacios
        ]
      ],
      email: [
        '', 
        [
          required, 
          pattern('^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$')
        ]
      ],
      phone: [
        '', 
        [
          required, 
          pattern('^[0-9]*$'), 
          minLength(10), 
          maxLength(10)
        ]
      ], 
    });
  }

  registers!: Register;
  title: string = 'Damian';

  ngOnInit(): void {
    this.loadRegisters();
  }

  loadRegisters(){
    this.service.getRegisters().subscribe((data: any) => console.log(data.data[0].attributes));
  }

  validateForm() {
    if (this.user.valid) {
      this.service.addRegisters(this.user.value).subscribe((response: any) => {
        console.log(response);
        this.successMessage = 'Registrado exitosamente. Revisar su WhatsApp y correo para más información.';
        this.user.reset(); // Limpiar el formulario después de enviar
      }, error => {
        console.error(error);
      });
    }
  }
}
