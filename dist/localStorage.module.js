import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalStorage } from './localStorage.service';
// write info text here
var AngularxLocalStorage = (function () {
    function AngularxLocalStorage() {
    }
    AngularxLocalStorage.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    providers: [LocalStorage]
                },] },
    ];
    /** @nocollapse */
    AngularxLocalStorage.ctorParameters = function () { return []; };
    return AngularxLocalStorage;
}());
export { AngularxLocalStorage };
//# sourceMappingURL=localStorage.module.js.map