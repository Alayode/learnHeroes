import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';



@Injectable()
export class HeroService {
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }

    //Import the Hero Symbol and add the following getHeroesSlowly method to the HeroService
    getHeroesSlowly(): Promise<Hero[]>{
        return new Promise<Hero[]>(resolve =>
        setTimeout(resolve,2000)) // delay the promise for 2 secs
            .then(() => this.getHeroes());
    }


}
