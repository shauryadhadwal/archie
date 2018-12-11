import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapContainerComponent } from './map-container/map-container.component';
import { PerformanceAreasComponent } from './performance-areas/performance-areas.component';
import { BusinessCapabilitiesComponent } from './business-capabilities/business-capabilities.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [MapContainerComponent, PerformanceAreasComponent, BusinessCapabilitiesComponent],
    imports: [
        SharedModule,
        RouterModule
    ]
})
export class ViewContainersModule { }
