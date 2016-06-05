import {CORE_DIRECTIVES, FORM_DIRECTIVES, COMMON_PIPES} from '@angular/common';
import {Component} from '@angular/core';
import {HTTP_PROVIDERS, Http} from '@angular/http';
import {list} from './list';
import {share} from './share';

@Component({
	selector: 'body',
	viewProviders: [HTTP_PROVIDERS],
	directives: [ CORE_DIRECTIVES, FORM_DIRECTIVES, list],
	templateUrl: './home.html',
	pipes : [ COMMON_PIPES ]
})
export class app {
	suscriber = {
		email : '',
		error : null,
		search : '',
		send : false
	}

	constructor(http: Http) {
		this.http = http;
	}

	suscribe(){
		this.suscriber.error = null;
		this.http
			.post(process.env.API_SUSCRIBE, this.suscriber)
			.map(res => res.json())
			.subscribe(res => {
			if(res.error){
				this.suscriber.error = res.error;
			} else {
				this.suscriber.email = '';
				this.suscriber.send = true;
			}
		});
	}
}
