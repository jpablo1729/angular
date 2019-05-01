import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface myData {
  success: boolean;
  secret: string;
}

interface registration {
  success: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedInStatus = JSON.parse(localStorage.getItem('loggedIn')) || false;

  constructor(private http: HttpClient) { }

  setLoggedInStatus(value: boolean, stringValue: string) {
    this.loggedInStatus = value;
    localStorage.setItem('loggedIn', stringValue);
  }

  get isLoggedInStatus() {
    return JSON.parse(localStorage.getItem('loggedIn')) || this.loggedInStatus;
  }

  getUserDetails(username, password) {
    return this.http.post<myData>('/api/auth.php', {
      username,
      password
    });
  }

  registerUser(username, password) {
    return this.http.post<registration>('/api/register', {
      username,
      password
    });
  }
}
