import { Component, Input, OnChanges } from '@angular/core';
import { Hero } from '../hero.model';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnChanges {
  @Input() id: Number = 0;
  hero?: Hero;

  constructor(private heroService: HeroService) {}

  ngOnChanges(): void {
    this.getHero(this.id);
  }

  getHero(id: Number) {
    if (id > 0) {
      this.heroService.getById(id).subscribe((x) => (this.hero = x));
    }
    this.hero = undefined;
  }
}
