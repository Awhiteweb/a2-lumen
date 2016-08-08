import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HomeComponent } from './home.component';
//import { Link } from './classes/link.entity';

@Component({
	selector: 'my-app',
	template: '<h1>{{title}}</h1><h3>{{detail}}</h3>',
//    templateUrl: 'app/app.component.template.html',
    directives: [ROUTER_DIRECTIVES],
    precompile: [
        HomeComponent
    ],
    providers: [
    ],

})

export class AppComponent {
	title = "Heading one";
	details = "details go here";
//	links = [
//		{ "name": "home", "address": "home" }
//	];
}