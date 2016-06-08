import {CORE_DIRECTIVES, FORM_DIRECTIVES, COMMON_PIPES} from '@angular/common';
import {ROUTER_DIRECTIVES, Router, OnActivate, RouteSegment } from '@angular/router';
import {HTTP_PROVIDERS, Http} from '@angular/http';
import {Component} from '@angular/core';
import {SHARE, SUSCRIBE} from '../settings';
import {list} from './list';
import {share} from './share';


@Component({
	selector: 'body',
	providers: [HTTP_PROVIDERS],
	directives: [ CORE_DIRECTIVES, FORM_DIRECTIVES, list],
	templateUrl: SHARE + 'home.html',
	pipes : [ COMMON_PIPES ]
})
export class app implements OnActivate {
	http: any;
	suscriber = {
		mail : '',
		error : null,
		search : '',
		send : false
	}

	constructor( http: Http) {
		this.http = http;
	}

	routerOnActivate(currSegment: RouteSegment) {
		let things = [ 'band', 'city', 'type', 'place' ];
		for (var i = things.length - 1; i >= 0; i--) {
			let foo = currSegment.getParam(things[i]);
			if(foo ){
				this.suscriber.search = foo;
			}
		}
	}

	suscribe(){
		if(this.suscriber.mail){
			this.suscriber.error = null
			this.http
				.post(SUSCRIBE, JSON.stringify(this.suscriber) )
				.subscribe(res => {
					let rt = res.json();
					if(rt.error){
						this.suscriber.error = rt.error;
					} else {
						this.suscriber.mail = '';
						this.suscriber.send = true;
					}
				});	
		}
		
	}
}
