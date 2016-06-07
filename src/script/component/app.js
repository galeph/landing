import {CORE_DIRECTIVES, FORM_DIRECTIVES, COMMON_PIPES} from '@angular/common';
import {Component} from '@angular/core';
import {HTTP_PROVIDERS, Http} from '@angular/http';
import {list} from './list';
import {share} from './share';
import {parse} from 'query-string';

@Component({
	selector: 'body',
	providers: [HTTP_PROVIDERS],
	directives: [ CORE_DIRECTIVES, FORM_DIRECTIVES, list],
	templateUrl: window.env.SHARE + 'home.html',
	pipes : [ COMMON_PIPES ]
})
export class app {
	query = {};
	suscriber = {
		mail : '',
		error : null,
		search : '',
		send : false
	}

	constructor( http: Http) {
		let query = parse(window.location.search);
		for (let i in query) {
			if(/band|city|type|place/i.test(i) ){
				this.suscriber.search = query[i];
			}
		}

		this.http = http;
		this.http._defaultOptions.url = window.env.SUSCRIBE;
	}

	suscribe(){
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
