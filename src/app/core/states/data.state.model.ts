import { LoadData, ReadData } from './../actions/data.action';
import { State, Action, StateContext, Selector, createSelector } from '@ngxs/store';
import { ReadExcelService } from '../readExcel/read-excel.service';

//------------------------------------------------------
export interface Capability{
    name: string;
    buildingBlocks: BuildingBlock[]
}

export interface BuildingBlock{
    name: string;
    businessCapabilities: BusinessCapability[]
}

export interface BusinessCapability{
    name: string;
    subCapabilities: SubCapability[];
}

export interface SubCapability{
    name: string;
}

export interface DataStateModel {
    capabilities: Capability[]
}

const defaults: DataStateModel = {
    capabilities: []
};

//------------------------------------------------------

@State<DataStateModel>({
    name: 'data',
    defaults: defaults
})
export class DataState{

    constructor(private readExcel: ReadExcelService) {}

    @Selector()
    static capabilities(state: DataStateModel) {
        return state.capabilities;
    }

    @Action(LoadData)
    loadData(ctx: StateContext<DataStateModel>, action: LoadData) {
            ctx.patchState({
                capabilities: action.data
            });
    }
}

