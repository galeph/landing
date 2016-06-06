import {CORE_DIRECTIVES, FORM_DIRECTIVES, COMMON_PIPES} from '@angular/common';
import {Component, Input, OnInit} from '@angular/core';
import {lives} from './service';
import {share} from './share';
import {search} from '../pipe/search';
import {time} from '../pipe/time';

// 20265 35373
@Component({
	selector: 'list',
	providers: [ lives ],
	directives: [share, CORE_DIRECTIVES],
	templateUrl: window.env.SHARE + './list.html',
	pipes : [ search, time, COMMON_PIPES ]
})
export class list implements OnInit {
	@Input() query;

	constructor(l: lives) {
		this.live = l;
	}

	ngOnInit(){
		this.live.getAll();
	}
}