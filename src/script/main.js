import 'zone.js';
import 'babel-polyfill';
import {provide, enableProdMode} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {HTTP_PROVIDERS, Http, BaseRequestOptions, XHRBackend} from '@angular/http';
import {app} from './component/app';

enableProdMode();
bootstrap(app, [
	HTTP_PROVIDERS,
	provide(XHRBackend, {useClass: BaseRequestOptions}),
	provide(LocationStrategy, { useClass: HashLocationStrategy })
]);
