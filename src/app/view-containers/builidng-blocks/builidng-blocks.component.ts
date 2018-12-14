import { GoToHomePage } from './../../core/actions/router.action';
import { NavigateToPrevious } from 'src/app/core/actions/router.action';
import { ActivatedRoute, Router } from '@angular/router';
import { BuildingBlock, DataState, Capability } from './../../core/states/data.state.model';
import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable, ObservableLike } from 'rxjs';

@Component({
    selector: 'app-builidng-blocks',
    templateUrl: './builidng-blocks.component.html',
    styleUrls: ['./builidng-blocks.component.scss']
})
export class BuilidngBlocksComponent implements OnInit {

    buildingBlock: BuildingBlock;

    private cpblIndex;
    private blockIndex;

    constructor(private route: ActivatedRoute, private router: Router, private store: Store) {
    }

    ngOnInit() {
        const capabilities = this.store.selectSnapshot(DataState.capabilities);
        if (capabilities.length == 0 || capabilities == null) {
            this.store.dispatch(new GoToHomePage());
        } else {
            this.cpblIndex = +this.route.snapshot.queryParamMap.get('cpblIndex');
            this.blockIndex = +this.route.snapshot.queryParamMap.get('blockIndex');

            this.buildingBlock = capabilities[this.cpblIndex].buildingBlocks[this.blockIndex];
        }
    }

    navigateToPrevious() {
        this.store.dispatch(new NavigateToPrevious());
    }

    clickedBusinessCapability(bcIndex) {
        this.router.navigate(['businessCapability'],
        {
            queryParams:
            {
                cpblIndex: this.cpblIndex,
                blockIndex: this.blockIndex,
                bcIndex: bcIndex
            }
        });
    }
}
