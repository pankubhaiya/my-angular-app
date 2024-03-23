import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ItmeListComponent } from './itme-list/itme-list.component';
import { NavbarComponentComponent } from './component/navbar-component/navbar-component.component';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from '../../firebaseConfin';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ItmeListComponent,NavbarComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(){
    initializeApp(firebaseConfig);
  }
}
