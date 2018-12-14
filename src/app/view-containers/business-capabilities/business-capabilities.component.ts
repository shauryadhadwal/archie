import { environment } from './../../../environments/environment';
import { GoToHomePage } from './../../core/actions/router.action';
import { ActivatedRoute, Router } from '@angular/router';
import { BusinessCapability, DataState } from './../../core/states/data.state.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { NavigateToPrevious } from 'src/app/core/actions/router.action';

@Component({
    selector: 'app-business-capabilities',
    templateUrl: './business-capabilities.component.html',
    styleUrls: ['./business-capabilities.component.scss']
})
export class BusinessCapabilitiesComponent implements OnInit {

    private cpblIndex;
    private blockIndex;
    private bcIndex;

    businessCapability: BusinessCapability;

    constructor(private route: ActivatedRoute,
        private store: Store,
        private router: Router,
    ) { }

    ngOnInit() {

        if (environment.production == false) {
            this.businessCapability = {
                "name": "Client Data Management",
                "subCapabilities": [
                    {
                        "name": "self-service online"
                    },
                    {
                        "name": "self-service mobile"
                    },
                    {
                        "name": "onboard in branch"
                    },
                    {
                        "name": "background checks"
                    },
                    {
                        "name": "regulatory reporting"
                    }
                ]
            }
            return;
        }

        const capabilities = this.store.selectSnapshot(DataState.capabilities);
        if (capabilities.length == 0 || capabilities == null) {
            this.store.dispatch(new GoToHomePage());
        } else {
            this.cpblIndex = +this.route.snapshot.queryParamMap.get('cpblIndex');
            this.blockIndex = +this.route.snapshot.queryParamMap.get('blockIndex');
            this.bcIndex = +this.route.snapshot.queryParamMap.get('bcIndex');

            this.businessCapability = capabilities[this.cpblIndex].buildingBlocks[this.blockIndex].businessCapabilities[this.bcIndex];
        }
    }

    navigateToPrevious() {
        this.store.dispatch(new NavigateToPrevious());
    }
}
