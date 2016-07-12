/// <reference path="../../observable.ts"/>
(function () {
    var s;
    var r;
    s = Rx.Observable.using(function () { return r; }, function () { return s; });
});
//# sourceMappingURL=using.js.map