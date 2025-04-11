import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  constructor(private router: Router) {}
  login() {
 
     const validUser: string = 'admin@admin.com'
     const validPassword: string = '123456'

     if (this.username === validUser && this.password === validPassword) {
       this.router.navigateByUrl('/eventList');
     }else{
       alert('Usuario o contraseña incorrectos');
     }
  }
}
