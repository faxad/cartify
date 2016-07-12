/// <reference path="../../observable.ts" />
/// <reference path="../../observer-lite.ts" />
(function () {
    var o;
    o = Rx.Observable.create(function (o) { });
    o = Rx.Observable.create(function (o) { return Rx.Disposable.empty; });
    o = Rx.Observable.create(function (o) { return function () { }; });
});
//# sourceMappingURL=create.js.map