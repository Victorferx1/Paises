import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';
  constructor( private http: HttpClient) { }

  get httpParams() {
    return new HttpParams().set('fields','name,capital,population,flags,ccn3');
  }

  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${termino}?fields=name,capital,population,flags,ccn3`;
    return this.http.get<Country[]>(url);
  }

  buscarPorCapital(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  getPaisporAlpha(id: string): Observable<Country> {
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>( url );
  }

  buscarRegion(termino: string): Observable<Country[]> {
    const params = new HttpParams()
    .set('fields','name,capital,population,flags,ccn3')
    const url = `${this.apiUrl}/region/${termino}`;
    return this.http.get<Country[]>(url, {params: params});
  }

}
