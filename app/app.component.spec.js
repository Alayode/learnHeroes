"use strict";
/* tslint:disable:no-unused-variable */
var app_component_1 = require('./app.component');
var testing_1 = require('@angular/core/testing');
// import { DebugElement } from '@angular/core';
var router_stubs_1 = require('./testing/router-stubs');
var router_stubs_2 = require('./testing/router-stubs');
var comp;
var fixture;
////////  SPECS  /////////////
beforeEach(testing_1.async(function () {
    testing_1.TestBed.configureTestingModule({
        declarations: [
            app_component_1.AppComponent,
            router_stubs_1.RouterLinkStubDirective, router_stubs_2.RouterOutletStubComponent
        ]
    })
        .compileComponents()
        .then(function () {
        fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        comp = fixture.componentInstance;
    });
    beforeEach(function () {
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
//# sourceMappingURL=app.component.spec.js.map