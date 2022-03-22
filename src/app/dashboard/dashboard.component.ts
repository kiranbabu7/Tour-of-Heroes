import { Component, OnInit } from '@angular/core';
import { Hero } from '../interface/hero.interface';
import { HeroService } from '../service/hero.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroservice: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroservice.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}
