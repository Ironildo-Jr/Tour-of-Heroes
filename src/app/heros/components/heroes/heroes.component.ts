import { Hero } from './../../../core/models/hero.model';
import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/core/services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeros();
  }

  onSelect(hero: Hero){

  }

  getHeros() {
    this.heroService.getAll().subscribe((x) => (this.heroes = x));
  }
}
