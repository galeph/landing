import {Injectable} from '@angular/core';
import {ical} from 'ical/ical.js'
import {Http} from '@angular/http';

@Injectable()
export class lives {
	events = [];
	constructor( http: Http) {
		this.http = http;
		this.http._defaultOptions.url = window.env.CAL;
	}

	getAll(): Promise {
		return this.http.get().subscribe(res => this.events = res.json().event);
	}

	handleError(error) {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}
}