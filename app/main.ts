import { bootstrap }    from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

import {
	AppComponent,
	appRouterProviders
} from './index';

bootstrap(AppComponent, [
	disableDeprecatedForms(),
 	provideForms(),
 	appRouterProviders
])
.catch(error => console.error(error));
