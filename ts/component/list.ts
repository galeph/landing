import {CORE_DIRECTIVES, FORM_DIRECTIVES, COMMON_PIPES} from '@angular/common';
import {Component, Input, OnInit} from '@angular/core';
import {SHARE} from '../settings';
import {lives} from './service';
import {share} from './share';
import {search} from '../pipe/search';
import {time} from '../pipe/time';




// 20265 35373
@Component({
	selector: 'list',
	providers: [ lives ],
	directives: [share, CORE_DIRECTIVES],
	templateUrl: SHARE + './list.html',
	pipes : [ search, time, COMMON_PIPES ]
})
export class list {
	live: any;
	@Input() query;

	constructor(l: lives) {
		this.live = l;
	}

	ngOnInit(){
		this.live.getAll();
	}
}