import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Heroes } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]>{
    this.messageService.add('Hero Service: fetched heroes');
    return of(Heroes);
  }

  getHero(id: number): Observable<Hero>{
    this.messageService.add(`Heroservice: fetched hero id = ${id}`);
    return of(Heroes.find(hero => hero.id === id));
  } 
}
