import { Router } from '@angular/router';
import { LoadData } from './../actions/data.action';
import { State, Action, StateContext, Selector, createSelector } from '@ngxs/store';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { NavigateToPrevious } from '../actions/router.action';

export interface RouterHistoryModel{
    previousRoute: string;
}

const defaults: RouterHistoryModel = {
    previousRoute: '/regions'
}

@State<RouterHistoryModel>({
    name: 'routerHistory',
    defaults: defaults
})
export class RouterHistoryState { 

    constructor(private location: Location){}

    @Selector()
    static previousState(state: RouterHistoryModel) {
        return state.previousRoute;
    }

    @Action(NavigateToPrevious)
    navigateToPrevious(ctx: StateContext<RouterHistoryModel>, action: LoadData) {
        this.location.back();
    } 
}


