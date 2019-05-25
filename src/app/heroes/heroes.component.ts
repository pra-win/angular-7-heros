import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.less']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;
  selectedHero:Hero = this.heroes[0];

  constructor() { }

  ngOnInit() {
    console.log(this.heroes);
  }

  onSelect(hero: Hero) {
    console.log(hero);
    this.selectedHero = hero;
  }

}
