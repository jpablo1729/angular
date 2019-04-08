import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface myData {
  success: boolean,
  secret: string    
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false');

  constructor(private http: HttpClient) { }

  setLoggedInStatus(value: boolean, stringValue: string) {
    this.loggedInStatus = value;
    localStorage.setItem('loggedIn', stringValue);
  }

  get isLoggedInStatus() {
    return JSON.parse(localStorage.getItem('loggedIn') || this.loggedInStatus);
  }

  getUserDetails(username, password) {
    //Post the details to API server return user info if its correct. Ajax request!!!
    return this.http.post<myData>('/api/auth.php', {
      username,
      password
    })
    //To see in cosole what happend!!!
    //.subscribe(data => {
    //  console.log(data, "thas we got for the server");
    //})

  }
}
