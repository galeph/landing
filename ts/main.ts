import 'zone.js/dist/zone';
import 'zone.js/dist/long-stack-trace-zone';
import 'reflect-metadata';
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
