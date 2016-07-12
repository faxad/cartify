/// <reference path="../../observable.ts" />
(function () {
    var o;
    var p;
    o = Rx.Observable.onErrorResumeNext(o, p, o, p);
    o = Rx.Observable.onErrorResumeNext([o, p, o, p]);
});
//# sourceMappingURL=onerrorresumenext.js.map