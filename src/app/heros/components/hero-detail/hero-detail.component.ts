import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from 'src/app/core/models/hero.model';
import { HeroService } from 'src/app/core/services/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
  hero!: Hero;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private locale: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero() {
    const id: Number = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getById(id).subscribe((x) => (this.hero = x));
  }

  goBack() {
    this.locale.back();
  }
}
