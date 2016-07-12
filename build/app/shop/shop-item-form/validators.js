"use strict";
var ExtendedValidators = (function () {
    function ExtendedValidators() {
    }
    ExtendedValidators.nameValidator = function (control) {
        if (!control.value.match(/^abc/)) {
            return { invalidName: true };
        }
    };
    return ExtendedValidators;
}());
exports.ExtendedValidators = ExtendedValidators;
//# sourceMappingURL=validators.js.map