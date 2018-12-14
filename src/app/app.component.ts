import { ReadExcelService } from './core/readExcel/read-excel.service';
import { LoadData, ReadData } from './core/actions/data.action';
import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { routerTransition } from './shared/animations/routerTransition';

@Component({
    selector: 'app-root',
    animations: [routerTransition],
    template: `
    <main [@routerTransition]="getState(o)">
        <router-outlet #o="outlet"></router-outlet>
    </main>
  `,
    styles: []
})
export class AppComponent {
    title = 'archie';

    constructor(private store: Store, private readExcel: ReadExcelService) {
        this.readExcel.readData();
    }

    getState(outlet) {
        return outlet.activatedRouteData.state;
      }
}
