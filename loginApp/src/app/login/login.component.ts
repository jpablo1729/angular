import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'; 
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private Auth: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  loginUser(event) {
    event.preventDefault();
    const target = event.target;
    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;
    this.Auth.getUserDetails(username, password).subscribe(data => {
      if (data.success) {
        this.Auth.setLoggedInStatus(true, 'true');
        this.router.navigate(['admin']);
        console.log('Redirected to the adminnistrator');
      } else {
        window.alert(data.secret);
        this.router.navigate(['login']);
        this.Auth.setLoggedInStatus(false, 'false');
      }
    });
  }
}
