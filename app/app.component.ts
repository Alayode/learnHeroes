//Import the component module from angular
import {Component} from '@angular/core';
@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <my-heroes></my-heroes>
  `
})
export class AppComponent {
    title = 'Tour of Heroes';
}

// - Add HeroesComponent to the declarations array of AppModule so Angular recognizes the <my-heroes> tags.
// - Add HeroService to the providers array of AppModule because we'll need it in every other view.
// - Remove HeroService from the HeroesComponent providers array since it has been promoted.
// - Add the supporting import statements for AppComponent.