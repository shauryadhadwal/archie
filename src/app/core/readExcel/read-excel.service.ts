import { LoadData } from '../actions/data.action';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';

@Injectable({
    providedIn: 'root'
})
export class ReadExcelService {

    private url = "../../../assets/data.json";

    constructor(private http: HttpClient, private store: Store) {
        this.uploadData();
    }

    public readData(): Observable<any> {
        return this.http.get<any>(this.url).pipe(tap(res => console.log(res)));
    }

    // Upload formatted data
    private uploadData() {
        this.readData().subscribe(res => {
            const data = JSON.parse(JSON.stringify(res));
            this.store.dispatch(new LoadData(data.capabilities));
        });
    }
}
