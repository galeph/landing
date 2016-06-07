import {CORE_DIRECTIVES, FORM_DIRECTIVES, COMMON_PIPES} from '@angular/common';
import {Component} from '@angular/core';
import {HTTP_PROVIDERS, Http} from '@angular/http';
import {list} from './list';
import {share} from './share';

@Component({
	selector: 'body',
	viewProviders: [HTTP_PROVIDERS],
	directives: [ CORE_DIRECTIVES, FORM_DIRECTIVES, list],
	templateUrl: window.env.SHARE + 'home.html',
	pipes : [ COMMON_PIPES ]
})
export class app {
	suscriber = {
		mail : '',
		error : null,
		search : '',
		send : false
	}

	constructor( http: Http) {
		this.http = http;
		this.http._defaultOptions.url = window.env.SUSCRIBE;
	}

	suscribe(){
		console.log(Http)
		if(this.suscriber.mail){
			this.suscriber.error = null
			this.http
				.post(window.env.SUSCRIBE, JSON.stringify(this.suscriber) )
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
