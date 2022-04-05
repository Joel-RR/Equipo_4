import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cita } from './interfaces/cita.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  constructor( private http: HttpClient ) {
  }

  addcita( cita : Cita ){
    return this.http.post('http://localhost:8000/cita',cita);
   }

   getAllCita() : Observable<Cita[]> {
    return this.http.get<Cita[]>('http://localhost:8000/cita');
   }
}
