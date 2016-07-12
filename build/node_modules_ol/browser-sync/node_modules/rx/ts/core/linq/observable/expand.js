/// <reference path="../../observable.ts" />
/// <reference path="../../concurrency/scheduler.ts" />
(function () {
    var o;
    o = o.expand(function (i) { return Rx.Observable.return(i + 1); });
    o = o.expand(function (i) { return Rx.Observable.return(i + 1); }, Rx.Scheduler.async);
});
//# sourceMappingURL=expand.js.map