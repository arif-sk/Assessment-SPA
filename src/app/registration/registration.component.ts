import { Component } from '@angular/core';
import { RegisterService } from '../_services/register.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  constructor(private registerService: RegisterService) {
    
  }
  model: any = {};

  register() {
    this.registerService.register(this.model).subscribe({
      next: response => {
        console.log(response);
      },
      error: error => {
        console.log(error);
      }
    });
  }
}
