import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from './hero.model';
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

  getAll() {
    this.messageService.add('HeroService: fetched heroes')
    return this.httpClient.get<Hero[]>(this.url);
  }

  getById(id: Number) {
    this.messageService.add(`HeroService: fetched id ${id}`)
    return this.httpClient.get<Hero>(`${this.url}/${id}`);
  }
  save(hero: Hero) {
    this.messageService.add('HeroService: saved hero')
    if (hero.id) {
      return this.httpClient.put<Hero>(`${this.url}/${hero.id}`, hero);
    }
    return this.httpClient.post<Hero>(this.url, hero);
  }
}
