export class LoadData {
    static readonly type = '[DATA] loadData';
    constructor(public data: any) { }
}

export class ReadData {
    static readonly type = '[DATA] readData';
}