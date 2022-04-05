import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor( private http: HttpClient ) {
  }

  addusuario( usuario : Usuario ){
   return this.http.post('http://localhost:8000/usuarios',usuario);
  }

  getAllUsuario() : Observable<Usuario[]> {
   return this.http.get<Usuario[]>('http://localhost:8000/usuarios');
  }
}
