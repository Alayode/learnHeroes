/* tslint:disable:no-unused-variable */
import { AppComponent } from './app.component';

import { async, ComponentFixture,  TestBed } from '@angular/core/testing';
// import { DebugElement } from '@angular/core';
import { RouterLinkStubDirective }   from './testing/router-stubs';
import { RouterOutletStubComponent } from './testing/router-stubs';
import { By }              from '@angular/platform-browser';

let comp:    AppComponent;
let fixture: ComponentFixture<AppComponent>;


////////  SPECS  /////////////
beforeEach( async(() => {
    TestBed.configureTestingModule({
        declarations: [
            AppComponent,
            RouterLinkStubDirective, RouterOutletStubComponent
        ]
    })

        .compileComponents()
        .then(() => {
            fixture = TestBed.createComponent(AppComponent);
            comp    = fixture.componentInstance;
        });

    beforeEach(() => {
        // trigger initial data binding
        fixture.detectChanges();

        // find DebugElements with an attached RouterLinkStubDirective
        //  linkDes = fixture.debugElement
        //     .queryAll(By.directive(RouterLinkStubDirective));

        // // get the attached link directive instances using the DebugElement injectors
        // links = linkDes
        //     .map(de => de.injector.get(RouterLinkStubDirective) as RouterLinkStubDirective);
    });
    // it('can get RouterLinks from template', () => {
    //     expect(links.length).toBe(2, 'should have 2 links');
    //     expect(links[0].linkParams).toBe('/dashboard', '1st link should go to Dashboard');
    //     expect(links[1].linkParams).toBe('/heroes', '1st link should go to Heroes');
    // });

}));

