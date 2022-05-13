import { HeroService } from './../hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  hero?: Hero;

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroService.getAll().subscribe(x => this.heroes = x)
  }

  selectHero(hero: Hero) {
    this.hero = hero;
  }
}
