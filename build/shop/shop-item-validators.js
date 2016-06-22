"use strict";
var ExtendedValidators = (function () {
    function ExtendedValidators() {
    }
    // validates name
    ExtendedValidators.nameValidator = function (control) {
        if (!control.value.match(/^abc/)) {
            return { invalidName: true };
        }
    };
    return ExtendedValidators;
}());
exports.ExtendedValidators = ExtendedValidators;
//# sourceMappingURL=shop-item-validators.js.map