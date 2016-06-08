import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {CAL} from '../settings';

@Injectable()
export class lives {
	http: any;
	events: any[];
	constructor( http: Http) {
		this.http = http;
		this.http._defaultOptions.url = CAL;
	}

	getAll() {
		return this.http.get().subscribe(res => this.events = res.json().event);
	}

	handleError(error) {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}
}