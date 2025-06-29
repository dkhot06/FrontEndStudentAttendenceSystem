import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  name: string = '';
  id: string = '';

  constructor(private router: Router) {}

  login() {
    if (this.name && this.id) {
      const idNum = parseInt(this.id, 10);
      if (idNum >= 1000 && idNum < 2000) {
        this.router.navigate(['/trainer-dashboard', this.id]);
      } else if (idNum >= 2000 && idNum < 3000) {
        this.router.navigate(['/batch-coordinator-dashboard', this.id]);
      } else if (idNum >= 3000 && idNum < 4000) {
        this.router.navigate(['/supervisor-dashboard', this.id]);
      }
    } else {
      alert("Please enter both name and ID.");
    }
  }
}
