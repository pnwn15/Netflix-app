import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  constructor(private router: Router) {}
  goToNextPage() {
    this.router.navigate(['/signin']); // เปลี่ยนเส้นทางได้ตามต้องการ
  }
}
