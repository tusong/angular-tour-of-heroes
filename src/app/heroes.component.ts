import { Component,OnInit } from '@angular/core';

import { Hero } from './hero';
import {Router} from '@angular/router';

import {HeroService} from './hero.service'

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: [ './heroes.component.css' ],
  providers:[]
})
export class HeroesComponent implements OnInit{
  constructor(private router: Router,private heroService:HeroService){

  }

  getHeroes():void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit() :void{
    this.getHeroes();
  }

  heroes : Hero[];
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}