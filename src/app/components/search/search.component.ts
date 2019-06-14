import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  termino:string;
  heroes:Heroe[];

  constructor(private activatedRoute:ActivatedRoute, private _heroesService:HeroesService, private router:Router) {
    
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {this.heroes = this._heroesService.buscarHeroes(params['termino']); this.termino = params['termino']});
  }

  verHeroe(idx:number) {
    this.router.navigate(['/heroe', idx]);
  }

}
