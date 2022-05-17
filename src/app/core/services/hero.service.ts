import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from '../models/hero.model';
import { MessageService } from './message.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  url: string = 'http://localhost:3001/heroes';

  constructor(
    private httpClient: HttpClient,
    private messageService: MessageService
  ) {}

  getAll(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return this.httpClient.get<Hero[]>(this.url);
  }

  getById(id: Number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched id ${id}`);
    return this.httpClient.get<Hero>(`${this.url}/${id}`);
  }

  save(hero?: Hero) {
    this.messageService.add('HeroService: saved hero');
    if (hero) {
      return this.httpClient.put<Hero>(`${this.url}/${hero.id}`, hero);
    }
    return this.httpClient.post<Hero>(this.url, hero);
  }
}
