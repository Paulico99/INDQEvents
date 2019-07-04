import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  baseUrl = 'http://api.events.indqtech.com/users';
  baseUrlTwo = 'http://api.events.indqtech.com/users/login';


  constructor(private http: HttpClient) { }

  
  createsUsuarios(data) {
    console.log(data);
    return this.http.post(this.baseUrl, {data});
  }

}
