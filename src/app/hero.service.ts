import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from './hero.model';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  url: string = 'http://localhost:3001/heroes';

  constructor(private httpClient: HttpClient) {}

  getAll() {
    return this.httpClient.get<Hero[]>(this.url);
  }

  getById(id: Number) {
    return this.httpClient.get<Hero>(`${this.url}/${id}`);
  }
  save(hero: Hero) {
    if (hero.id) {
      return this.httpClient.put<Hero>(`${this.url}/${hero.id}`, hero);
    }
    return this.httpClient.post<Hero>(this.url, hero);
  }
}
