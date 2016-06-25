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
var angular2_jwt_1 = require('angular2-jwt');
var Observable_1 = require('rxjs/Observable');
var AuthService = (function () {
    function AuthService(changeDetector) {
        this.changeDetector = changeDetector;
        this.auth0Lock = new Auth0Lock('IcUyRKjbz5MnN4G377fcugQZR6BjyncA', 'fawad.auth0.com');
    }
    AuthService.prototype.initiateAuth0LogIn = function () {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            _this.auth0Lock.show(function (error, profile, id_token) {
                if (error) {
                    console.log(error);
                }
                localStorage.setItem('profile', JSON.stringify(profile));
                localStorage.setItem('id_token', id_token);
                observer.next(true);
                observer.complete();
            });
        });
    };
    AuthService.prototype.login = function () {
        var _this = this;
        this.initiateAuth0LogIn().subscribe(function (d) {
            if (d) { } // TODO: something here to be added
            _this.changeDetector.detectChanges();
        }, function (e) { return console.log('error occured'); });
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('profile');
        localStorage.removeItem('id_token');
        this.changeDetector.detectChanges();
    };
    AuthService.prototype.isLoggedIn = function () {
        //return true; //TODO: Remove!
        return angular2_jwt_1.tokenNotExpired();
    };
    AuthService.prototype.isUserAdmin = function () {
        return true; //TODO: Remove!
        // try {
        //   return JSON.parse(
        //     localStorage.getItem('profile')
        //   )['role'] == 'admin' ? true : false;
        // } catch(e) {
        //       return false;
        // }
    };
    AuthService.getUser = function () {
        try {
            // return JSON.parse(localStorage.getItem(
            //     'profile'))['identities'][0]['user_id']
            return JSON.parse(localStorage.getItem('profile'))['identities'][0]['user_id'];
        }
        catch (e) {
            alert('please log in!');
        }
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [core_1.ChangeDetectorRef])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map