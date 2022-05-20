import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
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
  isCreating!: boolean;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private locale: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero() {
    const paramId = this.route.snapshot.paramMap.get('id');
    if (paramId == 'new') {
      this.isCreating = true;
      this.hero = { id: 0, name: '' };
    } else {
      this.isCreating = false;
      const id: number = Number(paramId);
      this.heroService.getById(id).subscribe((x) => (this.hero = x));
    }
  }

  save() {
    if (this.hero.id == 0) {
      this.heroService.create(this.hero).subscribe();
    } else {
      this.heroService.update(this.hero).subscribe();
    }

    this.goBack();
  }

  goBack() {
    this.locale.back();
  }
}
