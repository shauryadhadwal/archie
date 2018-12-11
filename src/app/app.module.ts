import { ViewContainersModule } from './view-containers/view-containers.module';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        ViewContainersModule,
        CoreModule,
        SharedModule,
    ],
    providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}],
    bootstrap: [AppComponent]
})
export class AppModule { }
