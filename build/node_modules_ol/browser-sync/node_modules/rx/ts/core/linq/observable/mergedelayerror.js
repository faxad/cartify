/// <reference path="../../observable.ts" />
(function () {
    var o;
    var p;
    Rx.Observable.mergeDelayError(o, p, o, p);
    Rx.Observable.mergeDelayError([o, p, o, p]);
});
//# sourceMappingURL=mergedelayerror.js.map