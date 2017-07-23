export declare class LocalStorage {
    constructor();
    private lsSupport();
    lsStoreItem(key: any, val: any): void;
    lsRemoveItem(key: any): void;
    lsClearLs(): void;
    lsGetItem(key: any): string;
    getLs(): Storage;
    private lsNotSupp();
}
