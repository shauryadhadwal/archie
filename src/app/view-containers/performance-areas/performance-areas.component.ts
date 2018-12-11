import { NavigateToPrevious } from './../../core/actions/router.action';
import { PerformanceArea, Region } from './../../core/states/data.state.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, Select } from '@ngxs/store';

@Component({
    selector: 'app-performance-areas',
    templateUrl: './performance-areas.component.html',
    styleUrls: ['./performance-areas.component.scss']
})
export class PerformanceAreasComponent implements OnInit {

    public region$: Region;
    public pfAreas$: PerformanceArea[];

    constructor(private route: ActivatedRoute,
        private store: Store,
        private router: Router
    ) { }

    ngOnInit() {
        const id = +this.route.snapshot.paramMap.get('regionIndex');
        this.store.select(state => state.data.regions[id]).subscribe(region => {
            this.region$ = region;
            this.pfAreas$ = region.performanceAreas;
        });
    }

    clickedBussinessCapability(areaIndex, businessIndex) {
        const route = './'+ areaIndex +'/business/'+ businessIndex;
        this.router.navigate([route], {relativeTo: this.route});
    }

    navigateToPrevious() {
        this.store.dispatch(new NavigateToPrevious());
    }

}
