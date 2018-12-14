import { GoToHomePage } from './../actions/router.action';
import { Router } from '@angular/router';
import { LoadData } from './../actions/data.action';
import { State, Action, StateContext, Selector, createSelector } from '@ngxs/store';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { NavigateToPrevious, NavigateTo } from '../actions/router.action';

export interface RouterHistoryModel {
    capabilityIndex: number;
    buildingBlockIndex: number;
    businessCapabilityIndex: number;
}

const defaults: RouterHistoryModel = {
    capabilityIndex: 0,
    buildingBlockIndex: 0,
    businessCapabilityIndex: 0
}

@State<RouterHistoryModel>({
    name: 'routerHistory',
    defaults: defaults
})
export class RouterHistoryState {

    constructor(private location: Location, private router: Router) { }

    // @Selector()
    // static previousState(state: RouterHistoryModel) {
    //     return state.previousRoute;
    // }

    @Action(NavigateToPrevious)
    navigateToPrevious(ctx: StateContext<RouterHistoryModel>, action: LoadData) {
        this.location.back();
    }

    @Action(GoToHomePage)
    goToHomePage() {
        this.router.navigate(['home']);
    }
}


