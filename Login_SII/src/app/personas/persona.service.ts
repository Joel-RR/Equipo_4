import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Personas } from './interfaces/personas.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor( private http: HttpClient ) {
  }

  addpersonas( persona : Personas ){
    return this.http.post('http://localhost:8000/personas', persona);
   }

   getAllPersonas() : Observable<Personas[]> {
    return this.http.get<Personas[]>('http://localhost:8000/personas');
   }
}
