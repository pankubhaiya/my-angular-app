import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup-component',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './signup-component.component.html',
  styleUrl: './signup-component.component.css'
})
export class SignupComponentComponent {
  constructor(private authservice:AuthService){

  }
  register(email:string,password:string) {
    // Implement register logic here
    console.log('register form submitted',email,password);
    this.authservice.resiterUser(email,password)
  }
}
