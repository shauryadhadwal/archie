import { LoadData, ReadData } from './core/actions/data.action';
import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { data } from './data';

@Component({
  selector: 'app-root',
    template: `<main><router-outlet></router-outlet>
  </main>`,
  styles: []
})
export class AppComponent {
    title = 'archie';

    constructor(private store: Store) { 
        this.store.dispatch(new LoadData(data));
        this.store.dispatch(new ReadData());
    }
}
