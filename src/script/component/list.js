import {CORE_DIRECTIVES, FORM_DIRECTIVES, COMMON_PIPES} from '@angular/common';
import {Component, Input, OnInit} from '@angular/core';
import {lives} from './service';
import {share} from './share';
import {search} from '../pipe/search';
import {time} from '../pipe/time';
import config  from '../lib.js';

// 20265 35373
@Component({
	selector: '.list',
	providers: [ lives ],
	directives: [share, CORE_DIRECTIVES],
	templateUrl: config.SHARE + 'list.html',
	pipes : [ search, time, COMMON_PIPES ],
	styles: [`
.list.opacity .share, .list.blur .share {
	display: none;
}
.opacity {
	opacity: 0.2 ;
    filter: alpha(opacity=20);
}
.blur {
	-webkit-filter: blur(4px);
	-moz-filter: blur(4px);
	-o-filter: blur(4px);
	-ms-filter: blur(4px);
	filter: blur(4px);
}`],
})
export class list {
	@Input() query;
	@Input() isSend;
	show = {
		opacity : true,
		blur : false
	};

	constructor(l: lives) {
		this.live = l;
		this.show.blur = Modernizr.cssfilters;
		this.show.opacity = !Modernizr.cssfilters;
	}

	ngOnInit(){
		this.live.getAll();
	}

	ngOnChanges(changes: SimpleChanges) {
		if(changes.isSend && changes.isSend.currentValue){
			this.show.blur = false;
			this.show.opacity = false;
		}
	}
}