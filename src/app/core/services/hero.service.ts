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

  save(hero?: Hero) {
    this.messageService.add('HeroService: saved hero');
    if (hero) {
      return this.httpClient.put<Hero>(`${this.url}/${hero.id}`, hero);
    }
    return this.httpClient.post<Hero>(this.url, hero);
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
