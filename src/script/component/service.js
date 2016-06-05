import {Injectable} from '@angular/core';
import {ical} from 'ical/ical.js'
import {Http} from '@angular/http';

@Injectable()
export class lives {
	events = [];
	constructor( http: Http) {
		this.http = http;
		this.http._defaultOptions.url = 'https://cal.alejonext.co/google/c4tdr6g60rq5ecm6dvsgga3kec%40group.calendar.google.com/private-f531818e5634a0b0b858d5ac502f4e22';
	}

	getAll(): Promise {
		return this.http.get().subscribe(res => this.events = res.json().event);
	}

	handleError(error) {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}
}