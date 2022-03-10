import { Component, OnInit, Input } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: any[] = [];

  @Input('size') size:number = 20;
  public offset: number = 0;
  public page: number=0;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes(this.offset, this.size);

  }

  getHeroes(offset: number, size: number): void {
    this.heroService.getHeroes(offset, size)
    .subscribe(res => this.heroes = res.data.results);

  }
  public goFirst(){
    this.offset=0;
    this.getHeroes(this.offset, this.size);
  }
  public search(){
    this.offset=0;
    this.getHeroes(this.offset, this.size);
  }

  public previousPage(){
    if(this.offset>0){
      this.offset-=this.size;
      this.getHeroes(this.offset, this.size);
    }
  }

  public nextPage(){
    this.offset+=this.size;
    this.getHeroes(this.offset, this.size);
  }

}
