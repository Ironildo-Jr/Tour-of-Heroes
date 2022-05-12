import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [
    { id: 1, name: 'Wolverine' },
    { id: 2, name: 'Noturno' },
    { id: 3, name: 'Tempesta' },
    { id: 4, name: 'Ciclope' },
  ];
  hero: Hero = { id: 0, name: 'Wolverine' };

  constructor() {}

  ngOnInit(): void {}
}
