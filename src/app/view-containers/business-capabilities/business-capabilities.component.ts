import { ActivatedRoute, Router } from '@angular/router';
import { Region, PerformanceArea, BusinessCapability } from './../../core/states/data.state.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { NavigateToPrevious } from 'src/app/core/actions/router.action';

@Component({
    selector: 'app-business-capabilities',
    templateUrl: './business-capabilities.component.html',
    styleUrls: ['./business-capabilities.component.scss']
})
export class BusinessCapabilitiesComponent implements OnInit {

    public regionName$: string;
    public performanceAreaName$: string;
    public businessCapability$: BusinessCapability;

    constructor(private route: ActivatedRoute,
        private store: Store,
        private router: Router,
    ) { }

    ngOnInit() {
        const regionIndex = +this.route.snapshot.paramMap.get('regionIndex');
        const areaIndex = +this.route.snapshot.paramMap.get('areaIndex');
        const businessIndex = +this.route.snapshot.paramMap.get('businessIndex');

        this.store.select(state => state.data.regions[regionIndex]).subscribe(region => {
            this.regionName$ = region.name;
            this.performanceAreaName$ = region.performanceAreas[areaIndex].name;
            this.businessCapability$ = region.performanceAreas[areaIndex].businessCapabilities[businessIndex];
        });
    }

    clickedListItem(listIndex) {
    }

    navigateToPrevious() {
        this.store.dispatch(new NavigateToPrevious());
    }
}
