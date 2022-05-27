import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from '../models/hero.model';
import { MessageService } from './message.service';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private url: string = `${environment.baseUrl}/heroes`;

  constructor(
    private httpClient: HttpClient,
    private messageService: MessageService
  ) {}

  getAll(): Observable<Hero[]> {
    return this.httpClient
      .get<Hero[]>(this.url)
      .pipe(tap((h) => this.log(`feched ${h.length} hero(es)`)));
  }

  getById(id: Number): Observable<Hero> {
    return this.httpClient
      .get<Hero>(`${this.url}/${id}`)
      .pipe(tap((h) => this.log(`feched hero id. ${h.id}`)));
  }

  update(hero: Hero): Observable<Hero> {
    return this.httpClient
      .put<Hero>(`${this.url}/${hero.id}`, hero)
      .pipe(tap((h) => this.log(`saved hero id. ${h.id}`)));
  }

  create(hero: Hero): Observable<Hero> {
    return this.httpClient
      .post<Hero>(this.url, hero)
      .pipe(tap((h) => this.log(`created hero id. ${h.id}`)));
  }

  search(term: string): Observable<Hero[]> {
    return this.httpClient
      .get<Hero[]>(`${this.url}?name=${term}`)
      .pipe(
        tap((h) => this.log(`found ${h.length} hero(es) with name ${term}`))
      );
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
