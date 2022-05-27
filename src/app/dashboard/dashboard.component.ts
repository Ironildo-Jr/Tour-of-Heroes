import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../core/models/hero.model';
import { HeroService } from '../core/services/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService,
    private route: Router) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero){
    this.route.navigate(['/heroes',hero.id])
  }

  getHeroes() {
    this.heroService.getAll().subscribe((x) => (this.heroes = x.slice(0, 5)));
  }
}
