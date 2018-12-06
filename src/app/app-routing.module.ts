import { MapContainerComponent } from './map-container/map-container.component';
import { BusinessCapabilitiesComponent } from './business/business-capabilities/business-capabilities.component';
import { PerformanceAreasComponent } from './view-containers/performance-areas/performance-areas.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '', component: MapContainerComponent
    },
    {
        path: 'performanceareas', component: PerformanceAreasComponent
    },
    {
        path: 'businesscapabilities', component: BusinessCapabilitiesComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
