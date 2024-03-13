import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ItmeListComponent } from './itme-list/itme-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ItmeListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-app';
}
