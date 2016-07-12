/// <reference path="../../observable.ts" />
(function () {
    var o;
    Rx.Observable.defer(function () { return o; });
    Rx.Observable.defer(function () { return o.toPromise(); });
});
//# sourceMappingURL=defer.js.map