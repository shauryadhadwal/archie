import { Region, DataState } from './../../core/states/data.state.model';
import { Store, Select } from '@ngxs/store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-map-container',
    templateUrl: './map-container.component.html',
    styleUrls: ['./map-container.component.scss']
})
export class MapContainerComponent implements OnInit {

    public regions$: Region[];

    constructor(private store: Store) {
        this.store.select(state => state.data.regions).subscribe(regions => this.regions$ = regions);
     }

    ngOnInit() {
    }

}
