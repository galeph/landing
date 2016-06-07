import 'babel-polyfill';
import 'zone.js/dist/zone';
import moment from 'moment';
import local from 'moment/min/locales.js';
moment.locale(window.navigator.language);
window.moment = moment;
window.env =  {
	SUSCRIBE:"https://foo...",
	CAL:"https://foo...",
	SHARE: 'http://localhost:9080/'
};