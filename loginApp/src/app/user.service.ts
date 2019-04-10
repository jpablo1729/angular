import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface myData {
  secret: string,
  success: boolean 
}

interface logout {
  success: boolean
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getSomeData() {
    return this.http.get<myData>('/api/database.php');
  }

  logout() {
    return  this.http.get<logout>('/api/logout.php');
  }

}
