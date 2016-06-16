import {Injectable} from '@angular/core';
import {Http, Headers} from "@angular/http";
import config  from '../lib.js';

@Injectable()
export class lives {
	events = [];
	
	constructor( http: Http) {
		this.http = http;
		this.http._defaultOptions.url = config.CAL;
	}

	getAll(): Promise {
		return this.http.get().subscribe(res => this.events = res.json().event);
	}

	handleError(error) {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}
}