/// <reference path="./es6.ts" />
/// <reference path="./disposables/disposable.ts" />
/// <reference path="./observer-lite.ts" />
var Rx;
(function (Rx) {
    var config;
    (function (config) {
    })(config = Rx.config || (Rx.config = {}));
    var helpers;
    (function (helpers) {
    })(helpers = Rx.helpers || (Rx.helpers = {}));
})(Rx || (Rx = {}));
(function () {
    var observer;
    var observable;
    observable.subscribe(observer);
    observable.subscribe(function (v) { });
    observable.subscribe(function (v) { }, function (e) { });
    observable.subscribe(function (v) { }, function (e) { }, function () { });
    observable.subscribeOnNext(function (v) { });
    observable.subscribeOnNext(function (v) { }, {});
    observable.subscribeOnError(function (v) { });
    observable.subscribeOnError(function (v) { }, {});
    observable.subscribeOnCompleted(function () { });
    observable.subscribeOnCompleted(function () { }, {});
    observable.forEach(observer);
    observable.forEach(function (v) { });
    observable.forEach(function (v) { }, function (e) { });
    observable.forEach(function (v) { }, function (e) { }, function () { });
    Rx.Observable.isObservable({});
});
//# sourceMappingURL=observable.js.map