
export interface BusinessCapability{
    name: string;
    businessDetailsList: [];
}

export interface PerformanceArea{
    name: string,
    id: number,
    businessCapabilities: BusinessCapability[]
}

export interface Region{
    name: string,
    id: number,
    performanceAreas: PerformanceArea[]
}

export interface DataStateModel {
    regions: Region[]
}

const defaults: DataStateModel = {
    regions: [];
};

@State<DataStateModel>({
    name: 'data',
    defaults: defaults
})
export class DataState{

    @Selector()
    static regions(state: DataStateModel) {
        return state.regions;
    }

    @Action(GetFriends)
    getFriends(ctx: StateContext<FriendsStateModel>) {
        return this.friendsService.getFriendsDashboard().pipe(tap(list => {

            ctx.patchState({
                friends: list
            });
            return;
        }));
    }
    
}

