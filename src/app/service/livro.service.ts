import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { Item, LivrosResultado } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  private readonly API = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient) {}

  buscar(query: string): Observable<Item[]> {
    const params = new HttpParams().append('q', query);
    return this.http.get<LivrosResultado>(this.API, { params })
    .pipe(
      tap(data => console.log("tap()", data)),
      map(data => data.items),
      tap(data => console.log("tap()", data))
      );
  }
}
