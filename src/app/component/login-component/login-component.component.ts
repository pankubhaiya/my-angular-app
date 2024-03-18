import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-component.component.html',
  styleUrl: './login-component.component.css'
})
export class LoginComponentComponent {
  
  login(email:string,password:string) {
    // Implement login logic here
    console.log('Login form submitted',email,password);
  }
}
