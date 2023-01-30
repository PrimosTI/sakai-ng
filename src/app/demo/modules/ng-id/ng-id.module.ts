import { ModuleWithProviders, NgModule } from '@angular/core';

import { NgIdComponent } from './ng-id.component';
import { NgIdConfig } from './ng-id.config';
import { NgIdService } from './ng-id.service';

export { NgIdConfig } from './ng-id.config';

@NgModule({
    declarations: [ NgIdComponent ],
    exports: [ NgIdComponent ]
})
export class NgIdModule {

    static forRoot(config?: NgIdConfig): ModuleWithProviders<NgIdModule> {
        return {
            ngModule: NgIdModule,
            providers: [
                { provide: NgIdService, useValue: new NgIdService(config ?? {}) }
            ]
        };
    }

}
