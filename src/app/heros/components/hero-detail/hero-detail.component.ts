import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Hero } from 'src/app/core/models/hero.model';
import { HeroService } from 'src/app/core/services/hero.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
  isCreating = true;
  obj = {name: 'oi', preco: 0}
  form = this.fb.group({
    id: [{ value: 0, disabled: true }],
    name: ['', [Validators.required, Validators.minLength(5)]],
  });

  constructor(
    private heroService: HeroService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private locale: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero() {
    const paramId = this.route.snapshot.paramMap.get('id');
    if (paramId != 'new') {
      this.isCreating = false;
      const id: number = Number(paramId);
      this.heroService.getById(id).subscribe((x) => {
        this.form.setValue(x);
      });
    }
  }

  save() {
    const { valid, controls } = this.form;
    if (valid) {
      if (controls['id'].value != 0) {
        this.heroService
          .update({ id: controls['id'].value, name: controls['name'].value })
          .subscribe();
      } else {
        this.heroService.create({name: controls['name'].value } as Hero).subscribe();
      }

      this.goBack();
    }
  }

  goBack() {
    this.locale.back();
  }
}
