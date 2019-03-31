import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getUserDetails(username, password) {
    //Post the details to API server return user info if its correct. Ajax request!!!
    return this.http.post('/api/auth.php', {
      username,
      password
    })
    //To see in cosole what happend!!!
    //.subscribe(data => {
    //  console.log(data, "thas we got for the server");
    //})

  }
}
