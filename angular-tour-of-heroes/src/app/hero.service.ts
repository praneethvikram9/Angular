import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import {Hero} from './hero';
import {Observable,of} from 'rxjs';
import {MessageService} from "./message.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes';
  constructor(
    private messageService: MessageService,
    private http: HttpClient) { }

  getHeroes(): Observable<Hero[]>{
    this.messageService.add('HeroService:fetched Heroes');
    return of(HEROES);
  }
  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService:${message}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
