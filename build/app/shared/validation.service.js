"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ValidationService = (function () {
    function ValidationService() {
        this.stateChecks = {};
        this.validityChecks = {};
    }
    ValidationService.prototype.stateCheck = function (control, code) {
        return (code in this.stateChecks) ? control[this.stateChecks[code]] : control.touched;
    };
    ValidationService.prototype.validityCheck = function (control, code) {
        var check = this.validityChecks[code];
        return check ? {
            "result": control.hasError(check['condition']),
            "message": check['message']
        } : { "result": false, "message": "" };
    };
    ValidationService.prototype.check = function (controlName) {
        var control = this.formToVlidate.controls[controlName];
        if (this.stateCheck(control, controlName)) {
            return (control.hasError('required')) ? {
                "result": true,
                "message": "Required Field!"
            } : this.validityCheck(control, controlName);
        }
        else {
            return { "result": false, "message": "" };
        }
    };
    ValidationService.prototype.configure = function (form, validityChecks, stateChecks) {
        this.formToVlidate = form;
        this.validityChecks = validityChecks;
        this.stateChecks = stateChecks;
    };
    ValidationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ValidationService);
    return ValidationService;
}());
exports.ValidationService = ValidationService;
//# sourceMappingURL=validation.service.js.map