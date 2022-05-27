import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  Subject,
  Observable,
  debounceTime,
  distinctUntilChanged,
  switchMap,
} from 'rxjs';
import { Hero } from 'src/app/core/models/hero.model';
import { HeroService } from 'src/app/core/services/hero.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  heroes$!: Observable<Hero[]>;
  @Input() label: string = '';
  @Output() selected = new EventEmitter<Hero>();
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((term) => this.heroService.search(term))
    );
  }

  select(hero: Hero) {
    this.selected.emit(hero);
  }

  search(term: string) {
    this.searchTerms.next(term);
  }
}
