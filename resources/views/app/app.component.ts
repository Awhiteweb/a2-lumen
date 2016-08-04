import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HomeComponent } from './home.component';
//import { Link } from './classes/link.entity';

@Component({
	selector: 'my-app',
    templateUrl: 'app/app.component.template.html',
    directives: [ROUTER_DIRECTIVES],
    precompile: [
        HomeComponent
    ],
    providers: [
    ],

})

export class AppComponent {
//	links = [
//		{ "name": "home", "address": "home" }
//	];
}