/// <reference path="../../observable.ts"/>
(function () {
    var o;
    o = Rx.Observable.while(function () { return true; }, Rx.Observable.just(1));
});
//# sourceMappingURL=while.js.map