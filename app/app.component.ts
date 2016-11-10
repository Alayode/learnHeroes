import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template:`
  <h1>{{title}}</h1>
  <h2>{{hero.name}} details!</h2>
  <div><label>id: </label>{{hero.id}}</div>
  <div>
    <label>name: </label>
    <input [(ngModel)]="hero.name" placeholder="name">
  </div>
  `
})
export class AppComponent {
    title = 'Tour of Heroes';
    hero: Hero = {
        id: 1,
        name: 'Windstorm'
    };
}


/*
* Now that we have a Hero class, let’s refactor our component’s hero property to be of type Hero. Then initialize it with an id of 1 and the name, "Windstorm".
*
*
* */