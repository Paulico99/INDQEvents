import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventosService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  baseUrl = 'http://api.events.indqtech.com/events';
  baseUrlOne =  'http://api.events.indqtech.com/events/attendance';
  baseUrlTwo = 'http://api.events.indqtech.com/images';


  constructor(private http: HttpClient) { 
  }
  getEvento() {
    return this.http.get<any>(this.baseUrl);
  }

  getEventoById(id: number) {
    return this.http.get<any>(this.baseUrl + '/' + id);
  }

  createEvento(data) {
    return this.http.post(this.baseUrl,(data));
  }

  assistanceEvento(data) {
    return this.http.post(this.baseUrlOne + '/' + data.id, data);
  }

  deleteAssistance(id: number) {
    return this.http.delete(this.baseUrlOne + '/' + id);
  }

  imageEvento(data){
    return this.http.post(this.baseUrlTwo,JSON.stringify(data));

  }
  getImage(id : number){
    return this.http.get<any>(this.baseUrlTwo + '/' + id);

  }
}
