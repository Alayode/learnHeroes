//This is the entry point to your application.
//This is the minimum requirements for n NG app.
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';

import { HeroDetailComponent } from './hero-detail.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent
        HeroDetailComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }