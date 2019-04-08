import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'; //Importa para injectar service
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private Auth: AuthService,
              private router: Router) { } //Injecta AuthService como Auth

  ngOnInit() {
  }

  loginUser(event) {
    event.preventDefault(); // Da un tiempo para ver el evento y no volver al mensaje default en consola
    const target = event.target, // the target is the login form
          username = target.querySelector('#username').value, //value for username
          password = target.querySelector('#password').value; //value for password
     
    //To see in console      
    //console.log(username, password);
    //AuthService fue injectado, podemos usar sus methodos 
    this.Auth.getUserDetails(username, password).subscribe(data => {
      if(data.success) {
        this.Auth.setLoggedInStatus(true);
        this.router.navigate(['admin']);
        console.log('Redirected to the adminnistrator');
      } else {
        window.alert(data.secret);
        this.router.navigate(['login']);
      }
      })
  } 

}
