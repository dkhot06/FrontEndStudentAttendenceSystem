import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component'; // 👈 Import your login component

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent], // 👈 Add it here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'attendance-system';
}
