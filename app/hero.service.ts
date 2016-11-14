import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';

@Injectable()
export class HeroService {

    private heroesUrl  = 'app/heroes'; //URL to web api

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    constructor(private http:Http) {}

    //
    // getHeroesTheOldWay(): Promise<Hero[]> {
    //     // return Promise.resolve(HEROES)
    // }

    getHeroes():promise<Hero[]> {

        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(response => response.json().data as Hero[])
            //error handling at the end this function we catch server failures
            // to an error handler
            .catch(this.handleError);

}

    //Import the Hero Symbol and add the following getHeroesSlowly method to the HeroService
    getHeroesSlowly(): Promise<Hero[]>{
        return new Promise<Hero[]>(resolve =>
        setTimeout(resolve,2000)) // delay the promise for 2 secs
            .then(() => this.getHeroes());
    }

    getHero(id: number): Promise<Hero> {
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id === id));
    }


}
