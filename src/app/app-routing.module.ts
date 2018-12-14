import { BusinessCapabilitiesComponent } from './view-containers/business-capabilities/business-capabilities.component';
import { BuilidngBlocksComponent } from './view-containers/builidng-blocks/builidng-blocks.component';
import { CapabilitiesComponent } from './view-containers/capabilities/capabilities.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home', component: CapabilitiesComponent, data: { state: 'home' } 
    },
    {
        path: 'buildingblock', component: BuilidngBlocksComponent, data: { state: 'buildingBlock' }
    },
    {
        path: 'businessCapability', component: BusinessCapabilitiesComponent, data: { state: 'businessCapability' }
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
