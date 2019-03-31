import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'; //Importa para injectar service


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private Auth: AuthService) { } //Injecta AuthService como Auth

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
        console.log('Redirect to the adminnistrator');
      } else {
        window.alert(data.secret);
      }
      })
  } 

}
