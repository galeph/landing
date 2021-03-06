import {Pipe, PipeTransform, Injectable} from '@angular/core';
import moment from 'moment';
moment.locale(window.navigator.language);
/**
 *
 *  <input [(model)]="query" type="text" />
 *  <ul>
 * 		<li *ngFor="let hero of heroes | search:query" >{{hero.name}}</li>
 *  </ul>
 */

@Pipe({
	name: 'time',
	pure: false
})
@Injectable()
export class time {
	transform(date, args) {
		return	moment(date).format(args);
	}
}
