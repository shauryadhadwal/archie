import { BusinessCapabilitiesComponent } from './view-containers/business-capabilities/business-capabilities.component';
import { MapContainerComponent } from './view-containers/map-container/map-container.component';
import { PerformanceAreasComponent } from './view-containers/performance-areas/performance-areas.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'regions', pathMatch: 'full' },
    {
        path: 'regions', component: MapContainerComponent
    },
    {
        path: 'regions/:regionIndex/areas', component: PerformanceAreasComponent
    },
    {
        path: 'regions/:regionIndex/areas/:areaIndex/business/:businessIndex', component: BusinessCapabilitiesComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
