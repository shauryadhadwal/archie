import { LoadData, ReadData } from './../actions/data.action';
import { State, Action, StateContext, Selector, createSelector } from '@ngxs/store';
import { ReadExcelService } from '../readExcel/read-excel.service';

export interface BusinessCapability{
    name: string;
    businessCapabilityList: [];
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
    regions: []
};

@State<DataStateModel>({
    name: 'data',
    defaults: defaults
})
export class DataState{

    constructor(private readExcelService: ReadExcelService){}

    @Selector()
    static regions(state: DataStateModel) {
        return state.regions;
    }

    // static performanceArea(name: string) {
    //     return createSelector([DataState], (state: DataStateModel) => {
    //         return state.filter(s => s.name )
    //     })
    // }

    @Action(LoadData)
    loadData(ctx: StateContext<DataStateModel>, action: LoadData) {
            ctx.patchState({
                regions: action.regions
            });
    }

    @Action(ReadData)
    ReadData() {
        this.readExcelService.readData();
    }
}

