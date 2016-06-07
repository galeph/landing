import {Pipe, Injectable} from '@angular/core';

/**
 *
 *  <input [(model)]="query" type="text" />
 *  <ul>
 * 		<li *ngFor="let hero of heroes | search:query" >{{hero.name}}</li>
 *  </ul>
 */

@Pipe({
	name: 'search',
	pure: false
})
@Injectable()
export class search {
	static time (a, b){
		return Math.sign(moment(a.start).diff(moment(b.start)));
	}

	transform(items, args) {
		
		var isSearch = data => {
			var isAll = false;

			if(typeof data === 'object' ){
				for (var z in data) {
					if(isAll = isSearch(data[z]) ){
						break;
					}
				}
			} else {
				if(typeof args === 'number'){
					isAll = data === args;
				} else {
					isAll = data.toString().match( new RegExp(args, 'i') );
				}
			} 

			return isAll;
		};
		
		return items.filter(isSearch).sort(search.time);
	}
}
