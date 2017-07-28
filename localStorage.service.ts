import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorage {
    constructor(){
        if(this.lsSupport){
        }else{
            this.lsNotSupp();
        }
    }
    private lsSupport(){
        return typeof(Storage) !== "undefined" ? true : false;
    }
    lsStoreItem(key:any,val:any){
        this.lsSupport() ? localStorage.setItem(key, JSON.stringify(val)) : this.lsNotSupp();
    }
    lsRemoveItem(key:any){
        this.lsSupport() ? localStorage.removeItem(key) : this.lsNotSupp();
    }
    // ideally this should not done
    lsClearLs(){
        this.lsSupport() ? localStorage.clear() : this.lsNotSupp();
    }
    lsGetItem(key:any){
        return JSON.parse(localStorage[key]);
    }
    getLs(){
        return localStorage;
    }



    private lsNotSupp(){
        console.warn('local storage not supported')
    }
}