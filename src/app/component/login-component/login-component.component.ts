import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-component.component.html',
  styleUrl: './login-component.component.css'
})
export class LoginComponentComponent {
  constructor(private services:AuthService){

  }
  login(email:string,password:string) {
    // Implement login logic here
    this.services.loginUser(email,password)
    console.log('Login form submitted',email,password);

  }
}
