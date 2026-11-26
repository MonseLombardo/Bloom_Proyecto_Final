import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Mision } from '../models/mision.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MisionesService {
  private readonly apiUrl = environment.misionesUrl;

  constructor(private http: HttpClient) {}

  obtenerMisiones(): Observable<Mision[]> {
    return this.http.get<Mision[]>(this.apiUrl);
  }
}
