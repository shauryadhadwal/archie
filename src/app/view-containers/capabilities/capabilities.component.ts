import { NavigateToPrevious } from 'src/app/core/actions/router.action';
import { ActivatedRoute, Router } from '@angular/router';
import { BuildingBlock, Capability, DataState } from './../../core/states/data.state.model';
import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-capabilities',
    templateUrl: './capabilities.component.html',
    styleUrls: ['./capabilities.component.scss']
})
export class CapabilitiesComponent implements OnInit {

    //Capabilities
    @Select(DataState.capabilities) capabilities$: Observable<Capability[]>;

    constructor(private route: ActivatedRoute,
        private store: Store,
        private router: Router
    ) { 
    }

    ngOnInit() {
    }

    clickedBuildingBlock(cpblIndex, blockIndex) {
        this.router.navigate(['/buildingblock'],
            {
                queryParams:
                {
                    cpblIndex: cpblIndex,
                    blockIndex: blockIndex
                }
            });
    }

    navigateToPrevious() {
        this.store.dispatch(new NavigateToPrevious());
    }

}
