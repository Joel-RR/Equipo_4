import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tipo_Persona } from './interfaces/tipo_persona.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoPersonaService {

  constructor( private http: HttpClient ) {
  }

  addtipo_persona( tipo_persona : Tipo_Persona ){
    return this.http.post('http://localhost:8000/tipo_persona',tipo_persona);
   }

   getAllTipo_Persona() : Observable<Tipo_Persona[]> {
    return this.http.get<Tipo_Persona[]>('http://localhost:8000/tipo_persona');
   }
}
