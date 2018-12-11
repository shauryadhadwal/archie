import { environment } from './../../environments/environment';
import { DataState } from './states/data.state.model';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { RouterHistoryState } from './states/router.state';

@NgModule({
  declarations: [],
    imports: [
        NgxsModule.forRoot([
            DataState,
            RouterHistoryState
        ]),
        NgxsLoggerPluginModule.forRoot({disabled: environment.production}),

  ]
})
export class CoreModule { }
