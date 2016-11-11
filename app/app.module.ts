//angular OotB Modules
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

//The Angular Router is an external, optional Angular NgModules called RouterModule.
import { RouterModule } from  '@angular/router';

//project components
import { AppComponent }  from './app.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import  {DashboardComponent} from './dashboard.component';




//services
import { HeroService } from './hero.service';


//The routes are an array of route definitions . We have only one route definition at the moment
//but rest assured, we'll add more.

//path : the router matches this route's path to the URL in the browser address bar ( heroes ).
//component: the compoennt that the router should create when navigating to this route ( HeroesComponent )

// the forRoot method is used for configured router at the root of the app.

//for clarity lets add the route configuration outside the Ngmodule


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([
            {
                path: 'heroes',
                component: HeroesComponent
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'detail/:id',
                component: HeroDetailComponent
            }


        ])
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        HeroDetailComponent,
        HeroesComponent
    ],
    providers: [
        HeroService
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }