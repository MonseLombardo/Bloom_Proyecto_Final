import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Consejo } from '../models/consejo.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ConsejosService {
  private readonly apiUrl = environment.consejosUrl;

  constructor(private http: HttpClient) {}

  obtenerConsejos(): Observable<Consejo[]> {
    return this.http.get<Consejo[]>(this.apiUrl);
  }
}
