import { Injectable } from '@angular/core';
var LocalStorage = (function () {
    function LocalStorage() {
        if (this.lsSupport) {
        }
        else {
            this.lsNotSupp();
        }
    }
    LocalStorage.prototype.lsSupport = function () {
        return typeof (Storage) !== "undefined" ? true : false;
    };
    LocalStorage.prototype.lsStoreItem = function (key, val) {
        this.lsSupport() ? localStorage.setItem(key, val) : this.lsNotSupp();
    };
    LocalStorage.prototype.lsRemoveItem = function (key) {
        this.lsSupport() ? localStorage.removeItem(key) : this.lsNotSupp();
    };
    // ideally this should not done
    LocalStorage.prototype.lsClearLs = function () {
        this.lsSupport() ? localStorage.clear() : this.lsNotSupp();
    };
    LocalStorage.prototype.lsGetItem = function (key) {
        return localStorage[key];
    };
    LocalStorage.prototype.getLs = function () {
        return localStorage;
    };
    LocalStorage.prototype.lsNotSupp = function () {
        console.warn('local storage not supported');
    };
    LocalStorage.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    LocalStorage.ctorParameters = function () { return []; };
    return LocalStorage;
}());
export { LocalStorage };
//# sourceMappingURL=localStorage.service.js.map