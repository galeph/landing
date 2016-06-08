import {CORE_DIRECTIVES, COMMON_PIPES} from '@angular/common';
import {Component,  Input, Attribute} from '@angular/core';
import {HTTP_PROVIDERS, Http} from '@angular/http';
import {SHARE} from '../settings';

/**
 *  "Unexpected directive value 'undefined' on the View of component 'app'"
 * <share is='twitter' text='Share this text' via='@alejonext' || optional -> width=300 height=600 name='hello' />
 */
@Component({
	selector: 'share',
	viewProviders: [HTTP_PROVIDERS],
	templateUrl: SHARE + 'share.html',
	directives: [ CORE_DIRECTIVES ],
	pipes : [ COMMON_PIPES ]
})
export class share {

	static facebook = {
		icon : 'facebook',
		share (absUrl) {
			return 'http://www.facebook.com/sharer.php?u=' + absUrl;
		},
		count (absUrl) {
			return 'https://graph.facebook.com/?callback=JSON_CALLBACK&id='+ absUrl;
		},
		get (data) {
			return data.shares;
		}
	};
	static twitter = {
		icon : 'twitter',
		share (absUrl, text, via) {
			return 'http://twitter.com/share?text=' + text + '&url=' + absUrl + '&via=' + via;
		},
		count (absUrl) {
			return 'https://cdn.api.twitter.com/1/urls/count.json?callback=JSON_CALLBACK&url='+ absUrl;
		},
		get (data) {
			return data.count;
		}
	};
	static google = {
		icon : 'google-plus',
		share(absUrl) {
			return 'https://plus.google.com/share?url='+ absUrl;
		}
	};
	static tumblr = {
		icon : 'tumblr',
		share(absUrl) {
			return 'https://www.tumblr.com/widgets/share/tool?shareSource=legacy&canonicalUrl=&url=' + absUrl;
		}
	};
	static reddit = {
		icon : 'reddit-alien',
		share (absUrl) {
			return 'https://www.reddit.com/submit?url=' + absUrl;
		}
	};
	static linkedin = {
		icon : 'linkedin',
		share (absUrl) {
			return 'https://www.linkedin.com/shareArticle?mini=true&url=' + absUrl;
		},
		count (absUrl) {
			return 'https://www.linkedin.com/countserv/count/share?callback=JSON_CALLBACK&format=jsonp&url='+ absUrl;
		},
		get (data) {
			return data.count;
		}
	};
	static pinterest = {
		icon : 'pinterest-p',
		share (absUrl, text, via) {
			return 'http://pinterest.com/pin/create/button/?url=' + absUrl + '&description=' + text + '&media=' + via ;
		},
		count (absUrl) {
			return 'https://api.pinterest.com/v1/urls/count.json?callback=JSON_CALLBACK&url='+ absUrl;
		},
		get (data) {
			return data.count;
		}
	};
	static xing = {
		icon : 'xing',
		share(absUrl) {
			return 'https://www.xing-share.com/app/user?op=share;sc_p=xing-share;url=' + absUrl;
		}
	};
	static email = {
		icon : 'envelope-o',
		share (absUrl, text) {
			return 'mailto:?subject=' + text + '&body=' + absUrl;
		}
	};

	static CHANGE = [ 'k', 'M', 'B' ];
	static MULTI = 1000;
	static DEC = 100;
	
	@Input() is;
	@Input() via;
	@Input() text;
	@Input() query;

	system: any;
	setting: string;

	ngOnInit(@Attribute('height') height, @Attribute('width') width, @Attribute('name') name ){
		this.system = share[this.is];
		this.setting = this.windows(width, height);
	}

	post(){
		var href = this.system.share(SHARE + '?type=' + this.query, encodeURI(this.text), this.via);
		var neww = window.open(href, 'Share', this.setting);
		if (window.focus) neww.focus();
	}

	windows (width: number = 600, height: number = 300){
		let setting: string = 'location=1,status=1,scrollbars=1';
		setting += ',height=' + String(height);
		setting += ',width=' + String(width);
		setting += ',top=' + String( (screen.height / 2) -  (height / 2 ));
		setting += ',left=' + String( (screen.width / 2) - ( width / 2 ));
		return setting
	}

}
