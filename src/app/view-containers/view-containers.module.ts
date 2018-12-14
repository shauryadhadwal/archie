import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessCapabilitiesComponent } from './business-capabilities/business-capabilities.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { CapabilitiesComponent } from './capabilities/capabilities.component';
import { BuilidngBlocksComponent } from './builidng-blocks/builidng-blocks.component';

@NgModule({
    declarations: [BusinessCapabilitiesComponent, CapabilitiesComponent, BuilidngBlocksComponent],
    imports: [
        SharedModule,
        RouterModule
    ]
})
export class ViewContainersModule { }
