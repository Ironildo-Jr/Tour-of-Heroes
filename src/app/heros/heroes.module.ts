import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroesComponent } from './components/heroes/heroes.component';

@NgModule({
  declarations: [HeroesComponent, HeroDetailComponent],
  imports: [CommonModule, HeroesRoutingModule, ReactiveFormsModule],
})
export class HeroesModule {}
