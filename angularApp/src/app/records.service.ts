import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

interface myData{
  data: any;
}

@Injectable({//Says that the server can be injectable with other classes
  providedIn: 'root'
})
export class RecordsService {

  constructor(private http: HttpClient) { }

  datos = this.http.get<myData>('http://localhost:4321/file.php');

  getData() {
    return this.datos;
  }

  onDelete() {
      this.datos = null;
    return this.datos;
  }
}
