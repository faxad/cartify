import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { appRouterProviders } from './app.routes';

import {disableDeprecatedForms, provideForms} from '@angular/forms';

bootstrap(AppComponent, [
	disableDeprecatedForms(),
 	provideForms(),
 	appRouterProviders
])
.catch(error => console.error(error));